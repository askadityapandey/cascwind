// Function to convert CSS property to Tailwind class
function cssToTailwindClass(property, value) {
    switch (property.toLowerCase()) {
      case 'font-size':
        return `text-${value.replace(/px$/, '')}`; // Handle pixel values
      case 'color':
        return `text-${value.replace(/[^a-z-]/g, '')}`; // Handle color names
      case 'background-color':
        return `bg-${value.replace(/[^a-z-]/g, '')}`; // Handle color names
      case 'margin':
        return `m-${value.replace(/[^a-z0-9-]/g, '')}`; // Handle margins
      case 'padding':
        return `p-${value.replace(/[^a-z0-9-]/g, '')}`; // Handle paddings
      case 'width':
        return `w-${value.replace(/[^a-z0-9%-]/g, '')}`; // Handle widths
      case 'height':
        return `h-${value.replace(/[^a-z0-9%-]/g, '')}`; // Handle heights
      // Add more cases for other properties as needed
      default:
        return property + ':' + value; // Handle unrecognized properties
    }
  }
  
  // Function to convert CSS to Tailwind CSS
  function convertToTailwindCSS(cssCode) {
    var lines = cssCode.split('\n');
    var tailwindCSS = '';
  
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i]?.trim();
  
      if (!line) continue;
  
      var parts = line.split(':');
      var property = parts[0].trim();
      var value = parts.slice(1).join(':').trim();
  
      tailwindCSS += cssToTailwindClass(property, value) + ' ';
    }
  
    return tailwindCSS.trim();
  }
  
  // Function to handle the conversion process
  function handleConversion() {
    var cssCode = document.getElementById('inputcss').value;
    var tailwindCSS = convertToTailwindCSS(cssCode);
    document.getElementById('outputTailwind').value = tailwindCSS;
  }
  
  // Attach click event listener to the "Convert" button
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btn').addEventListener('click', handleConversion);
  });
  