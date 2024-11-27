# CanvasJS Charts for Figma
Easily add CanvasJS charts to your Figma designs! This plugin lets you render charts from JSON and insert them directly into your Figma project as image frames.

## Features  
- Add preconfigured **CanvasJS charts** to Figma.  
- Simple workflow: paste JSON, specify a frame name (optional), and you're done.  
- Supports all CanvasJS chart types (e.g., column, line, pie, etc.)

## Installation
- Clone this repository or download the ZIP file.
- Open Figma and go to **Plugins > Development > Import Plugin from Manifest**.
- Select the manifest.json file from src folder of this repository.

## How to Use
1. **Prepare Your Chart Options**
Write your chart options in CanvasJS JSON format. For example:
```json  
{  
    "title": {  
        "text": "Monthly Sales"  
    },  
    "data": [{  
        "type": "column",  
        "dataPoints": [  
            { "label": "January", "y": 100 },  
            { "label": "February", "y": 120 },  
            { "label": "March", "y": 150 }
        ]  
    }]  
} 
```

2. **Run the Plugin**
- Open Figma and launch the plugin.
- Paste your JSON into the input field.
- Enter a frame name (e.g., "Sales Chart").

3. **Render and Insert**
The plugin will render the chart using CanvasJS, convert it to an image, and insert it as a frame in your Figma project.

## Contribution
Contributions are welcome! If you encounter any issues or have ideas for enhancements, feel free to open a pull request or issue.

## Support 
If you run into any problems or bugs, [create an issue here](https://github.com/vishwas-r/CanvasJS-Figma-Plugin/issues) and we’ll assist you as soon as possible.
