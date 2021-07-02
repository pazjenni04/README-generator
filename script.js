const inquirer = require('inquirer');
const fs = require('fs');
const { fileURLToPath } = require('url');


inquirer 
    .prompt([
    {
        type: "input",
        message: "What is the name of your application?",
        name: "Title",
            
    },
    {
        type: "input",
        message: "Please provide a short description of your application.",
        name: "description",
    },
    {
        type: "input",
        message: "What was your motivation in building this application?",
        name: "motivation",
        
    },
    {
        type: "input",
        message: "What problem does your application solve?",
        name: "problem",
        
    },
    {
        type: "input",
        message: "What are the steps to install your application?",
        name: "installation",
        
    },
    {
        type: "input",
        message: "Please provide instructions and examples on how to use your application.",
        name: "usage",
        
    },
    {
        type: "input",
        message: "Please list all collaborators involved in creating the project.",
        name: "collaborators",
        
    },
    {
        type: "input",
        message: "Please outline the contribution guidelines for someone to collaborate in this project.",
        name: "guidelines",
        
    },
    {
        type: "input",
        message: "Please outline the test instructions for your application.",
        name: "test",
        
    },
    {
        type: "input",
        message: "What technologies were used for this application?",
        name: "technologies",
        
    },
    {
        type: "list",
        message: "Please choose one of the following licensing for your application.",
        name: "license",
        choices: [
            "The MIT License",
            "Mozilla Public License 2.0",
            "Zlib/libpng License",
            "IBM Publice License Version 1.0",
            "Apache 2.0 License"
        ]
    },
    {
        type: "input",
        message: "What are some frequently asked questions that could assist the user with your application?",
        name: "questions",
        
    },
    {
        type: "input",
        message: "What is your Github URL?",
        name: "github",
        
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
        
    },
    {
        type: "list",
        message: "How do you prefer to be contacted?",
        name: "communication",
        choices: [
            "Email",
            "Github",
        ]
    }
    ])
    .then((response) => {
    let buildreadme = 
    `#${response.Title}
    [![License: ${response.license}]

    ##Table of Contents
        1. [Description](#description)
        2. [Installation](#installation)
        3. [Usage](#usage)
        4. [Collaborators](#collaborators)
        5. [Contribution Guidelines](#contribution-guidelines)
        6. [Tests](#tests)
        7. [Technologies](#technologies)
        8. [Questions](#questions)
        9. [Contact info](#contact-info)
        10. [License](#license)
    ##Description
        ${response.description}
        The motivation behind this application is ${response.motivation}
        The problem this application solves is ${response.problem}
    ##Installation
        ${response.installation}
    ##Usage
        ${response.usage}
    ##Collaborators
        ${response.collaborators}
    ###Contribution guidelines
        ${response.guidelines}
    ##Tests
        ${response.test}
    ##Technologies
        ${response.technologies}
    ##Questions
        ${response.questions}
    ###Contact info
        Please feel free to contact me via ${response.communication}.
        ${response.github}
        ${response.email}
    #License
        ${response.license}`
   
    fs.writeFile('README.md', buildreadme, (err) => {
        err ? console.error(err) : console.log('Success!')
    });
})
