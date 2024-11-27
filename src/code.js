figma.showUI(__html__, { width: 400, height: 600 });

figma.ui.onmessage = (msg) => {
    if (msg.type === 'chart') {
        var { base64Image, frameName, chartWidth, chartHeight } = msg;

        var imageData = base64ToUint8Array(base64Image);
        var image = figma.createImage(imageData);

        var frame = figma.createFrame();
        frame.name = frameName || "CanvasJS Chart";
        frame.resize(chartWidth, chartHeight);
        
        var imageNode = figma.createRectangle();
        imageNode.resize(chartWidth, chartHeight);
        imageNode.fills = [{ type: 'IMAGE', scaleMode: 'FIT', imageHash: image.hash }];
        
        imageNode.constraints = {
            vertical: "SCALE",
            horizontal: "SCALE",
        };
        
        frame.appendChild(imageNode);
        figma.currentPage.appendChild(frame);

        figma.viewport.scrollAndZoomIntoView([frame]);
    }
};

function base64ToUint8Array(base64) {
    var binaryString = base64Decode(base64.split(',')[1]);
    var len = binaryString.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}

function base64Decode(base64) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var output = '';
    var buffer = 0;
    var bufferLength = 0;

    for (var i = 0; i < base64.length; i++) {
        var char = base64.charAt(i);
        var charIndex = chars.indexOf(char);
        if (charIndex === -1) continue;

        buffer = (buffer << 6) | charIndex;
        bufferLength += 6;

        while (bufferLength >= 8) {
            output += String.fromCharCode((buffer >> (bufferLength - 8)) & 0xFF);
            bufferLength -= 8;
        }
    }
    return output;
}