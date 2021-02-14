// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('generateMarkdown')
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
        message: 'Enter your GitHub repo name.',
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
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: [
        'Apache License 2.0',
        'Boost Software License 1.0',
        'GNU AGPL v3', 
        'GNU GPL v3', 
        'GNU LGPL v3',
        'GNU FDLv 1.3',
        'ISC',
        'Mozilla Public License 2.0', 
        'MIT License', 
        'N/a'
        ]
    } 
];



// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./README.md', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }

        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
}
// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(
        questions
    )

}

// Function call to initialize app
init();
