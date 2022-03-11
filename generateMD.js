// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
    if (license !== undefined){
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
    } else {
        return ""
    }
}

function renderLicenseLink(license){
    if (license !== undefined){
        return `[${license}](https://opensource.org/licenses/${license})`
    } else {
        return ""
    }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let section = ''
    if (license === "MIT") {
        section = `Copyright <YEAR> <COPYRIGHT HOLDER>

        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
         files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy,
          modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
           is furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
         OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
          LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
           IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
    } else if ( license === "ISC") {
        section = `Copyright <YEAR> <OWNER>

        Permission to use, copy, modify, and/or distribute this software for any purpose with
        or without fee is hereby granted, provided that the above copyright notice and this permission
        notice appear in all copies.
        
        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING
         ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
          INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
           ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`
    } else {
        section = "No license."
    }
    return section;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, contributing, test, license, question, email}) {
    license = license[0]
    console.log(license)
    return `# ${title}

  ${renderLicenseBadge(license)}

  ## Description
  ${description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  
  ## Installation
  
  ${installation}
  
  
  ## Usage
  
  ${usage}
  
  
  ## License
  
 ${renderLicenseLink(license)}

 ${renderLicenseSection(license)}
  
  
  ## Contributing
  
  ${contributing}
  
  
  ## Tests
  
  ${test}
  
  
  ## Questions
  <a href="#questions"></a>
  If you have any questions about the project please contact me at.
  - [GitHub](https://github.com/${question}?tab=repositories)
  - Email: ${email}
  `;
}

module.exports = generateMarkdown;

