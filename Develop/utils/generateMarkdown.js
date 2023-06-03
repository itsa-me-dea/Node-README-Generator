// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if(license != "None") {
    let noSpace = license.replace(/\s+/g, '%20'); 
    badge = "![License Badge](https://img.shields.io/badge/license-" + noSpace + "-green?style=for-the-badge&logo=appveyor)";
    
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  // select correct license link for the selected license
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
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSect = "";

  // if a license has been selected, create License section
  // with link to license information
  if (license != "None") {
    licenseSect = 
    `## License

    The license this application is covered under is: [${license}](${renderLicenseLink(license)}).`;
  }

  return licenseSect;
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }
const generateMarkdown = ({ project, username, email, what, why, how, urXP, installation, usage, screenshot, collaborators, thirdParty, tutorials, license}) =>
`# ${project}

${renderLicenseBadge(license)}

### **[Description](#description) | [Installation](#installation) | [Usage](#usage) | [Credits](#credits) | [License](#license) | [Questions](#questions)**

## Description

${what}.

${why}.

${how}.

${urXP}.

## Installation

${installation}.

## Usage

${usage}.

![alt text](${screenshot})

## Credits

- ${collaborators}.
- ${thirdParty}.
- ${tutorials}.

${renderLicenseSection(license)}

## Questions

My gitHub username is [${username}](https://github.com/${username}), and you can contact me at ${email}.`;

module.exports = generateMarkdown;
