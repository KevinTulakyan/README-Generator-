// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter your GitHub username!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the name of your GitHub repo?',
        validate: githubRepo => {
            if (githubRepo) {
              return true;
            } else {
              console.log('Please enter your GitHub repo!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: title => {
            if (title) {
              return true;
            } else {
              console.log('Please enter your title!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Type a description of your project.',
        validate: description => {
            if (description) {
              return true;
            } else {
              console.log('Please enter a description!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'If applicable, describe the steps required to install your project for the Installation section.'
        
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples of your project in use for the Usage section.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines on how other developers can contribute to your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide any tests written for your application and eexplain how to run them.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: [
        'GNU AGPLv3', 
        'GNU GPLv3', 
        'GNU LGPLv3', 
        'Mozilla Public License 2.0', 
        'Apache License 2.0', 
        'MIT License', 
        'Boost Software License 1.0', 
        'The Unlicense'
        ]
    }
];



// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
