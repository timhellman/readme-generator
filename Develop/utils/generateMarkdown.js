// function to generate markdown for README
function generatemarkdown(answers) {
  return `# Description of Application
  \`\`\`
  ${answers.description}
  \`\`\`




  ## Table Of Contents
  \`\`\`
  ${answers.tableofcontents}
  \`\`\`




  ### Installation Instructions
  \`\`\`
  ${answers.installation}
  \`\`\`




  ### Usage Information
  \`\`\`
  ${answers.usage}
  \`\`\`




  ### License For Application
  \`\`\`
  ${answers.license}
  \`\`\`




  ### Contribution Guidelines
  \`\`\`
  ${answers.contribution}
  \`\`\`




  ### Test Instructions
  \`\`\`
  ${answers.test}
  \`\`\`



  
  ### Additional Questions for the User
  \`\`\`
  ${answers.additionalquestions}
  \`\`\`
`;
}

module.exports = generatemarkdown;
