// TODO: Create a function that returns a license badge based on which license is passed in
// If no license selected, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  // Create a badge from selected license
  if(license != "None") {
    // replace empty spaces in license for link
    let noSpace = license.replace(/\s+/g, '%20'); 
    badge = "[![License Badge](https://img.shields.io/badge/license-" + noSpace + "-green?style=for-the-badge&logo=appveyor)](" + renderLicenseLink(license) + ")";
    
  }

  return badge;
}

// If no contribution selected, return an empty string
function renderContributeBadge(contribute) {
  let badge2 = "";

  // Create a badge from selected contribution
  if(contribute != "None") {
    badge2 = "[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=for-the-badge&logo=appveyor)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)";
    
  }

  return badge2;
}

// TODO: Create a function that returns the license link
// If no license selected, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  // Add selected license link
  switch(license) {
    case "Apcahe License 2.0":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
      break;
    case "GNU General License v3.0":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "MIT License":
      licenseLink = "https://mit-license.org/";
      break;
    case "BSD 2-Clause License":
      licenseLink = "https://opensource.org/license/bsd-2-clause/";
      break;
    case "BSD 3-Clause License":
      licenseLink = "https://opensource.org/license/bsd-3-clause/";
      break;
    case "Boost Software License 1.0":
      licenseLink = "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case "Creative Commons Zero v1.0 Universal":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Eclipse Public License 2.0":
      licenseLink = "https://www.eclipse.org/legal/epl-2.0/";
      break;
    case "GNU Affero General Public License v3.0":
      licenseLink = "https://www.gnu.org/licenses/agpl-3.0.en.html";
      break;
    case "GNU General Public License v2.0":
      licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
      break;
    case "GNU Lesser General Public License v2.1":
      licenseLink = "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html";
      break;
    case "Mozilla Public License 2.0":
      licenseLink = "https://www.mozilla.org/en-US/MPL/2.0/";
      break;
    case "The Unlicense":
      licenseLink = "https://unlicense.org/";
      break;
    default:
      licenseLink = "";
      break;
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If no license selected, return an empty string
function renderLicenseSection(license) {
  let licenseSect = "";

  // create license section if license is selected
  if (license != "None") {
    licenseSect = "## License\n\n The license this application is covered under is: [" + license + "](" + renderLicenseLink(license) + ").";
  }

  return licenseSect;
}

// create list from Collaborators
function collabList(collaborators) {
  let collabArr = collaborators.split(', ');
  let markdownList = collabArr.map(function(element) {
  return `  - [${element.trim()}](https://github.com/${element.trim()})`;
  });

  return markdownList.join('\n');
}

// create list from Third-party assets and Tutorials lists
function listToMarkdown(list) {
  let array = list.split(', ');
  let markdownList = array.map(function(element) {
  return '  - ' + element.trim();
  });

  return markdownList.join('\n');
}

function renderContributeSection(contribute) {
  let contributeSect = "<!-- If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer. -->\n" + contribute;

  // create license section if license is selected ( Adapted from https://github.com/Esri/contributing/blob/master/README.md?plain=1)
  if (contribute != "None") {
  contributeSect = `In general, follow the "fork-and-pull" Git workflow.

  1. **Fork** the repo on GitHub.
  2. **Clone** the project to your own machine.
  3. **Commit** changes to your own branch.
  4. **Push** your work back up to your fork.
  5. Submit a **pull request** so that your changes can be reviewed.
    
  NOTE: Be sure to merge the latest from "upstream" before making a pull request!
  
  When contributing to this project, please follow the [${contribute}](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) code of conduct.`;
  }

  return contributeSect;
}

// If no license selected, return an empty string
function renderLicenseTOC(license) {
  let licenseTOC = ""
  
  // generate TOC link for license if selected
  if (license != "None") {
    licenseTOC = 
    `| [License](#license) `;
  }

  return licenseTOC;
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ project, username, email, what, why, how, urXP, installation, usage, screenshot, collaborators, thirdParty, tutorials, license, contribute, tests}) =>
`# ${project}

${renderLicenseBadge(license)}
${renderContributeBadge(contribute)}

### **[Description](#description) | [Installation](#installation) | [Usage](#usage) | [Credits](#credits) ${renderLicenseTOC(license)}| [Contribute](#contribute) | [Tests](#tests) | [Questions](#questions)**

## Description

${what}.

${why}.

${how}.

${urXP}.

## Installation

${installation}.

## Usage

${usage}.

![example of app](${screenshot})

## Credits

- Collaborators: 
${collabList(collaborators)}
- Third-party assets: 
${listToMarkdown(thirdParty)}
- Tutorials: 
${listToMarkdown(tutorials)}

${renderLicenseSection(license)}

## Contribute

${renderContributeSection(contribute)}.

## Tests

${tests}.

## Questions

My gitHub username is [${username}](https://github.com/${username}), and you can contact me at ${email}.`;

module.exports = generateMarkdown;
