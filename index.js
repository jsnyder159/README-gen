const inquirer = require("inquirer");
const fs = require("fs");

const licenses = ["[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
 "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
 "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"]

const [MIT, WTFPL, Mozilla] = licenses;

const promptQuestions = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "description",
        message: "What do you want your description section to read?",
    },
    {
        type: "input",
        name: "installation",
        message: "What do you want your installation section to read?",
    },  
    {
        type: "input",
        name: "usage",
        message: "What do you want your usage section to read?",
    },  
    {
        type: "input",
        name: "contributing",
        message: "Who contributed to your project?",
    },  
    {
        type: "input",
        name: "test",
        message: "What would you like your tests section to say?",
    },
    {
        type: "checkbox",
        name: "license",
        message: "What would you like your tests section to say?",
        choices: [
            `MIT`, `WTFPL`, `Mozilla`
        ],
    },
    {
        type: "input",
        name: "question",
        message: "What is your GitHub user name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },

    ]);
};



const generateMD = ({description, installation, usage, license, contributing, test, question, email}) =>

`# Description
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
<a href="#installation"></a>

## Usage

${usage}
<a href="#usage"></a>

## License

${license}
<a href="#license"></a>

## Contributing

${contributing}
<a href="#contributing"></a>

## Tests

${test}
<a href="#tests"></a>

## Questions
<a href="#questions"></a>
If you have any questions about the project please contact me at.
- [GitHub](https://github.com/${question}?tab=repositories)
- Email: ${email}
`

const init = () => {
    promptQuestions()
        .then((answers) => fs.writeFileSync('README.md', generateMD(answers)))
        .then(() => console.log("Successfully wrote README.md."))
        .catch((err) => console.error(err));
};

init();
