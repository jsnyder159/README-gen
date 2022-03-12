// Packages and .js file.
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMD");

// function that writes the README.md file, and console logs the error or "Success!" if it was written without error.
function writeToFile(data) {
    fs.writeFile("README.md", data, (err) =>
    err ? console.log(err) : console.log("Success!")
);
}

function init () {
    questions();
};
// Array of questions asked inside of terminal
const questions = () => {
    return inquirer.prompt([
{
    type: "input",
    name: "title",
    message: "What is the name of your project?",
},
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
    message: "What license do you want to use?",
    choices: [
        "MIT", "ISC"
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
])
.then((data) => {
    const info = generateMarkdown(data);
    writeToFile(info)
});

}

init();

