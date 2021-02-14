// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license =>{
  if(license === 'Apache License 2.0'){
    return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
  }
  else if (license === 'Boost Software License 1.0') {
    return 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg'
  }
  else if (license === 'GNU AGPL v3') {
    return 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg'
  }
  else if (license === 'GNU GPL v3') {
    return 'https://img.shields.io/badge/License-GPLv3-blue.svg'
  }
  else if (license === 'GNU LGPL v3') {
    return 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg'
  }
  else if (license === 'GNU FDLv 1.3') {
    return 'https://img.shields.io/badge/License-FDL%20v1.3-blue.svg'
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

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
