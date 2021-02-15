// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const displayLicenseBadge = license =>{
  if(license === 'Apache License 2.0'){
    return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
  }
  else if (license === 'Boost Software License 1.0') {
    return 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg'
  }
  else if (license === 'GNU AGPL v3') {
    return 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg'
  }
  else if (license === 'GNU FDLv 1.3') {
    return 'https://img.shields.io/badge/License-FDL%20v1.3-blue.svg'
  }
  else if (license === 'GNU GPL v3') {
    return 'https://img.shields.io/badge/License-GPLv3-blue.svg'
  }
  else if (license === 'GNU LGPL v3') {
    return 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg'
  }
  else if (license === 'ISC') {
    return 'https://img.shields.io/badge/License-ISC-blue.svg'
  }
  else if (license === 'Mozilla Public License 2.0') {
    return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'
  }
  else if (license === 'MIT License') {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg'
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const displayLicenseLink = license =>{
  if(license === 'Apache 2.0'){
    return 'https://opensource.org/licenses/Apache-2.0';
  } 
  else if(license === 'Boost') {
    return 'https://www.boost.org/LICENSE_1_0.txt';
  } 
  else if(license === 'GNU AGPL v3') {
    return 'https://www.gnu.org/licenses/agpl-3.0';
  } 
  else if(license === 'GNU FDL v1.3') {
    return 'https://www.gnu.org/licenses/fdl-1.3';
  } 
  else if(license === 'GNU GPL v3') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } 
  else if(license === 'GNU LGPL v3') {
    return 'https://www.gnu.org/licenses/lgpl-3.0';
  } 
  else if(license === 'ISC') {
    return 'https://opensource.org/licenses/ISC';
  } 
  else if(license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } 
  else if(license === 'Mozilla') {
    return 'https://opensource.org/licenses/MPL-2.0';
  } 
  else { 
    // N/a selected
    return '';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const displayLicenseSection = license => {  
  if(license === 'N/a'){
    return '';
  }
  return`
  ## License
  - ${license}
  `
}

const BadgeCheck = license => {
  if(license === 'N/a'){
    return ''
  }
  return `
  [![License](${displayLicenseBadge(license)})](${displayLicenseLink(license)})
`
}

const displayTableOfContents = license => {
  if(license === 'N/A') {
    return `
## Table of Contents
  * [GitHub](#repo)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)  
  * [Questions](#questions)      
      
`
  } 
  return `
## Table of Contents
  * [GitHub](#repo)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#test)  
  * [Questions](#questions)   
`
}


// TODO: Create a function to generate markdown for README
// Intergrated module.export

module.exports = generateMarkdown => {
  console.log(generateMarkdown);
  //destructure obj
  const { license, ...data } = generateMarkdown
  console.log("license uses: " + license);
  console.log("data is: " + data.title);

  return `
# ${data.title}

${BadgeCheck(license)}

# Description
${data.description}

${displayTableOfContents(license)}

## Github Link
${data.repo}
  
## Installation
${data.installation}
  
## Usage
${data.usage}
  
${displayLicenseSection(license)}
  
## Contribution
${data.contributing}
  
## Tests
${data.tests}
  
## Questions
${data.username}

${data.email}  
`
};
