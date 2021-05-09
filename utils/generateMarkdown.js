// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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

  This project is running using the ${data.license} license

  ## Contribution

  ${data.contribution}

  ## Tests

  You can run tests using the following command:

  \`\`\`
  ${data.tests}
  \`\`\`

  ## Questions

  If you have any questions about the project, you should contact ${data.username} using the following methods:

  [GitHub]]{https://github.com/${data.username}}
  [Email]{${data.email}}
  

  ### This README file was generated using Tom Chappell's [README Generator]{https://github.com/choonchy/week-9-homework}
  `;
}

module.exports = generateMarkdown;
