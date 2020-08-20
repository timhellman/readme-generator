var inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

const fs = require("fs")
var something = {}
// array of questions for user
const questions = [
  {
    message: "Please write a short description for your application.",
    name: "description",
    default: "this is the best app!"
  },
  {
    type: "input",
    message: "List your table of contents here",
    name: "tableofcontents",
    default: "something , something, dark side"
  },
  {
    type: "input",
    message: "Installation instructions",
    name: "installation",
    default: "npm install"
  },
  {
    type: "input",
    message: "Usage information",
    name: "usage",
    default: "just do it!"
  },
  {
    type: "input",
    message: "License for application",
    name: "license"
  },
  {
    type: "input",
    message: "Contribution guidelines",
    name: "contribution"
  },
  {
    type: "input",
    message: "Test instructions",
    name: "test"
  },
  {
    type: "input",
    message: "Additional user questions",
    name: "additionalquestions"
  }
];

function init(){
inquirer.prompt(questions).then((answers) => {
  const markdownContent = generateMarkdown(answers)
  fs.writeFile("readme.md", markdownContent, err=> console.log(err))
})

    // Use user feedback for... whatever!!
 

  .catch(error => {
    if(error) {
      console.log(error) // Prompt couldn't be rendered in the current environment
    }
      // Something else when wrong
  
  });
}

init ()

  

