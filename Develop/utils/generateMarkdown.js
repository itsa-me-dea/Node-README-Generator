// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if(license != "None") {
    badge = "![License Badge](https://img.shields.io/badge/license-" + license + "-green?style=for-the-badge&logo=appveyor)";
    
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
      licenseLink = "https://mit-license.org/";
      break;
    case "GNU General License v3.0":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "MIT License":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "BSD 2-Clause License":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    case "BSD 3-Clause License":
      licenseLink = "https://mit-license.org/";
      break;
    case "Boost Software License 1.0":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "Creative Commons Zero v1.0 Universal":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Eclipse Public License 2.0":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    case "GNU Affero General Public License v3.0":
      licenseLink = "https://mit-license.org/";
      break;
    case "GNU General Public License v2.0":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "GNU Lesser General Public License v2.1":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Mozilla Public License 2.0":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    case "The Unlicense":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
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
    licenseSect += "## License\n"
    licenseSect += "Please see " + renderLicenseLink(license) + " to get detailed information for this license\n";
  }

  return licenseSect;
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }
const generateMD = ({ project, username, email, what, why, how, urXP, installation, usage, screenshot, collaborators, thirdParty, tutorials, license}) =>
`# ${project}

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


## License

The license this application is covered under is: [${license}](/LICENSE).

## Questions

My gitHub username is [${username}](https://github.com/${username}), and you can contact me at ${email}.`;

module.exports = generateMD;
