var inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

const fs = require("fs")
var something = {}
// array of questions for user
const questions = [
  {
    type: "input",
    message: "Please write a short description for your application.",
    name: "description",
    default: "this is the best app!"
  },
  {
    type: "input",
    message: "List your table of contents here",
    name: "tableofcontents",
    default: "none necessary"
    
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
    default: "Just go for it!"
  },
  {
    type: "input",
    message: "License for application",
    name: "license",
    default: "None"
  },
  {
    type: "input",
    message: "Contribution guidelines",
    name: "contribution",
    default: "None"
  },
  {
    type: "input",
    message: "Test instructions",
    name: "test",
    default: "None"
  },
  {
    type: "input",
    message: "Additional user questions",
    name: "additionalquestions",
    default: "None"
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

  

