// Array of all licenses, their links, and their badge
// Badges courtesy of https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
const licenseTypes = [
  "This project has no license",
  {
    id: "Apache-2.0",
    link: "https://opensource.org/licenses/Apache-2.0",
    badge: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  },
  {
    id: "BSD-3-Clause",
    link: "https://opensource.org/licenses/BSD-3-Clause",
    badge: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  },
  {
    id: "GPL-2.0 (or later)",
    link: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
    badge: "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  },
  {
    id: "LGPL-3.0",
    link: "https://www.gnu.org/licenses/lgpl-3.0",
    badge: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
  },
  {
    id: "MIT",
    link: "https://opensource.org/licenses/MIT",
    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  },
  {
    id: "MPL-2.0",
    link: "https://opensource.org/licenses/MPL-2.0",
    badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  },
  {
    id: "EPL-1.0",
    link: "https://opensource.org/licenses/EPL-1.0",
    badge: "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  },
]



// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != licenseTypes[0]) {
    switch (license) {
      case licenseTypes[1].id:
        return licenseTypes[1].badge;
        
      case licenseTypes[2].id:
        return licenseTypes[2].badge;

      case licenseTypes[3].id:
        return licenseTypes[3].badge;

      case licenseTypes[4].id:
        return licenseTypes[4].badge;

      case licenseTypes[5].id:
        return licenseTypes[5].badge;

      case licenseTypes[6].id:
        return licenseTypes[6].badge;

      case licenseTypes[7].id:
        return licenseTypes[7].badge;
    }
  } else {
    return ""
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != licenseTypes[0].id) {
    switch (license) {
      case licenseTypes[1].id:
        return licenseTypes[1].link;
        
      case licenseTypes[2].id:
        return licenseTypes[2].link;

      case licenseTypes[3].id:
        return licenseTypes[3].link;

      case licenseTypes[4].id:
        return licenseTypes[4].link;

      case licenseTypes[5].id:
        return licenseTypes[5].link;

      case licenseTypes[6].id:
        return licenseTypes[6].link;

      case licenseTypes[7].id:
        return licenseTypes[7].link;
    }
  } else {
    return ""
  }
}

// Function that returns the license section of README
// If there is no license, returns a string mentioning such
function renderLicenseSection(license) {
  let licenseLink = renderLicenseLink(license)
  if (license != licenseTypes[0]) {
    return `This project is using the ${license} license.
  A copy of the ${license}'s terms can be found [here](${licenseLink})`
  } else {
    return "This project does not use any license."
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contribution](#contribution)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  Running the following command will install the required dependencies of this project:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contribution

  ${data.contribution}

  ## Tests

  You can run tests using the following command:

  \`\`\`
  ${data.tests}
  \`\`\`

  ## Questions

  If you have any questions about the project, you should contact ${data.username} using the following methods:

  [GitHub](https://github.com/${data.username})

  [Email](${data.email})
  
  ---

  ### This README file was generated using [Tom Chappell](https://github.com/choonchy)'s [README Generator](https://github.com/choonchy/week-9-homework)
  `;
}

module.exports = generateMarkdown;
