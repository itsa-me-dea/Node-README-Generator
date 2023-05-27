// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
// const questions = [];
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'project',
        message: 'Enter your project title:',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your gitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
    {
        type: 'input',
        name: 'what',
        message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'how',
        message: 'What problem does it solve?',
    },
    {
        type: 'input',
        name: 'urXP',
        message: 'What did you learn?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions on how to use your app:',
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'If you have a image or gif example, provide the file pathway:',
    },
    {
        type: 'input',
        name: 'collaborators',
        message: 'List your collaborators, if any, GitHub usernames:',
    },
    {
        type: 'input',
        name: 'thirdParty',
        message: 'If you used any third-party assets that require attribution, list the creators with links to their primary web presence:',
    },
    {
        type: 'input',
        name: 'tutorials',
        message: 'If you followed tutorials, include links:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ["None", "Apcahe License 2.0", "GNU General License v3.0", "MIT License", "BSD 2-Clause License", "BSD 3-Clause License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]
    },
]);
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const generateMD = ({ name, location, github, linkedin }) =>
`# ${data.title}

### **[Description](#description) | [Installation](#installation) | [Usage](#usage) | [Credits](#credits) | [License](#license)**

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:

![alt text](assets/images/screenshot.png)

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).`;

// TODO: Create a function to initialize app
const init = () => {
    questions()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => writeFile('README.md', generateMD(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
