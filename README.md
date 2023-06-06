# Node README Generator

[![License Badge](https://img.shields.io/badge/license-MIT%20License-green?style=for-the-badge&logo=appveyor)](https://mit-license.org/)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=for-the-badge&logo=appveyor)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)

### **[Description](#description) | [Installation](#installation) | [Usage](#usage) | [Credits](#credits) | [License](#license) | [Contribute](#contribute) | [Tests](#tests) | [Questions](#questions)**

## Description

My motivation is to create a README generator that utilizes Node to prompt the user for answers to autofill a README template.

I built this project for users to easily create a README by answering a series of questions. README's can be a chore for some, so this streamlines the process and provides a README that's filled in by the user's answers.

This solves the issue of writing a README. As stated before, many find writing a README to be a chore. Rather than having to search for a good template, this just takes the user's input and creates a README with all the necessary features.

I learned how to utilize Node, arrow functions, template literals (and just how literal they are), and how to generate files.

## Installation

Download or fork this package. From there, open the integrated terminal (this is for VSCode) and run the following: 1. `npm init`, 2. `npm i`, 3. `npm -i inquirer@8.2.4`.

## Usage

In the integrated table, run `node index` and answer the prompts. (**NOTE**: If you don't have an answer for a prompt, enter "N/A" or "None" (with capitalization), and this can be edited or deleted by the user in the README md document. Additionally, for the **[Credits](#credits)** section, use a comma separated list for multiple entries. And there's no need to end your prompts with a final period, as that's built into the template.) After answering the prompts, the README.md will be generated in the `/Develop` folder.

A **walkthrough video** can be downloaded from the [Assets](/Develop/Assets/screen-capture-NodeREADMEgen.mov) folder.

![example of final product](/Develop/Assets/final-product.png)

## Credits

- Collaborators: 
  - N/A.
- Third-party assets: 
  - https://shields.io/category/license
  - https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
  - https://www.npmjs.com/package/inquirer/v/8.2.4#prompt
  - https://baldbeardedbuilder.com/blog/code-of-conduct-and-contributions-in-public-repositories.md/
- Tutorials: 
  - https://www.tutorialrepublic.com/faq/how-to-convert-comma-separated-string-into-an-array-in-javascript.php#:~:text=Answer%3A%20Use%20the%20split(),to%20an%20array%20of%20characters.
  - https://www.shecodes.io/athena/10237-how-to-replace-spaces-with-dashes-in-a-javascript-string#:~:text=replace()%20method%20with%20the,whitespace%20character%20with%20a%20dash.
  - https://stackoverflow.com/questions/37963168/how-to-call-calling-a-function-inside-a-template-literal
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
  - https://github.com/Esri/contributing/blob/master/README.md?plain=1

## License

 The license this application is covered under is: [MIT License](https://mit-license.org/).

## Contribute

In general, follow the "fork-and-pull" Git workflow.

  1. **Fork** the repo on GitHub.
  2. **Clone** the project to your own machine.
  3. **Commit** changes to your own branch.
  4. **Push** your work back up to your fork.
  5. Submit a **pull request** so that your changes can be reviewed.
    
  NOTE: Be sure to merge the latest from "upstream" before making a pull request!
  
  When contributing to this project, please follow the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) code of conduct.

## Tests

None.

## Questions

My gitHub username is [itsa-me-dea](https://github.com/itsa-me-dea), and you can contact me at wachadea@gmail.com.