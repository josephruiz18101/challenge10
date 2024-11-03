import inquirer from 'inquirer';
import fs from 'fs';
import { Circle, Triangle, Square } from './lib/shapes.js';
import generateSVG from './lib/svgLogo.js';

async function run() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter text (up to 3 characters):',
      validate: input => input.length <= 3 || 'Please enter up to 3 characters.',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (color keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (color keyword or hexadecimal):',
    },
  ]);

  let shapeInstance;
  switch (answers.shape) {
    case 'Circle':
      shapeInstance = new Circle(answers.shapeColor);
      break;
    case 'Triangle':
      shapeInstance = new Triangle(answers.shapeColor);
      break;
    case 'Square':
      shapeInstance = new Square(answers.shapeColor);
      break;
  }

  const svgContent = generateSVG(answers.text, answers.textColor, shapeInstance);

  // Ensure the `examples` folder exists
  if (!fs.existsSync('examples')) {
    fs.mkdirSync('examples');
  }

  // Write the SVG content to `examples/logo.svg`
  fs.writeFileSync('examples/logo.svg', svgContent);

  console.log('Generated examples/logo.svg');
}

run();
