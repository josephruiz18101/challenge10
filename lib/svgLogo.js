// lib/svgLogo.js

function generateSVG(text, textColor, shape) {
    // SVG template for 300x200 size with shape and text
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `;
  }
  
  // Export generateSVG as the default export
  export default generateSVG;
  