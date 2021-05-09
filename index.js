// Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// Array of license types

const licenseTypes = [
    "This project has no license",
    "Apache License 2.0",
    "BSD 3-Clause \"New\" or \"Revised\" license",
    "BSD 2-Clause \"Simplified\" or \"FreeBSD\" license",
    "GNU General Public License (GPL)",
    "GNU Library or \"Lesser\" General Public License (LGPL)",
    "MIT license",
    "Mozilla Public License 2.0",
    "Common Development and Distribution License",
    "Eclipse Public License version 2.0"
]

// Array of prompt objects for Inquirer to use

const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a short description of your application"
    },
    {
        type: "input",
        name: "installation",
        message: "What code must be run to install the required dependencies of your project?",
        default: "npm i"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your application?"
    },
    {
        type: "list",
        name: "license",
        message: "What license is your project using?",
        choices: licenseTypes
    },
    {
        type: "input",
        name: "contribution",
        message: "What should the user know about contributing to the repo?"
    },
    {
        type: "input",
        name: "tests",
        message: "What command is used to complete a test on the project?",
        default: "none"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
    .then(answers => {
        return fs.writeFile("./generated-files/README.md", generateMarkdown(answers), () => {
            console.log("README successfully created!")
        })
    })
    .catch(err => {
        console.log(err)
    })
}

// Function call to initialize app
init();
