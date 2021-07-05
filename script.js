const inquirer = require('inquirer');
const fs = require('fs');
// const { fileURLToPath } = require('url');


inquirer 
    .prompt([
    {
        type: "input",
        message: "What is the name of your application?",
        name: "Title",
        validate: (value) =>{if (value){return true} else{return 'Please provide a title to continue.'}},
            
    },
    {
        type: "input",
        message: "Please provide a short description of your application.",
        name: "description",
        validate: (value) =>{if (value){return true} else{return 'Please provide a description to continue.'}},
    },
    {
        type: "input",
        message: "What are the steps to install your application?",
        name: "installation",
        validate: (value) =>{if (value){return true} else{return 'Please provide steps to install your app to continue.'}},
        
    },
    {
        type: "input",
        message: "Please provide instructions and examples on how to use your application.",
        name: "usage",
        validate: (value) =>{if (value){return true} else{return 'Please provide instructions and examples to continue.'}},
        
    },
    {
        type: "input",
        message: "Please list all collaborators involved in creating the project.",
        name: "collaborators",
        validate: (value) =>{if (value){return true} else{return 'Please provide your list of collaborators to continue.'}},
        
    },
    {
        type: "input",
        message: "Please outline the contribution guidelines for someone to collaborate in this project.",
        name: "guidelines",
        validate: (value) =>{if (value){return true} else{return 'Please provide contribution guidelines to continue.'}},
        
    },
    {
        type: "input",
        message: "Please outline the test instructions for your application.",
        name: "test",
        validate: (value) =>{if (value){return true} else{return 'Please provide test instructions to continue.'}},
        
    },
    {
        type: "input",
        message: "What technologies were used for this application?",
        name: "technologies",
        validate: (value) =>{if (value){return true} else{return 'Please provide a list of technologies to continue.'}},
        
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
        ],
        validate: (value) =>{if (value){return true} else{return 'Please choose a licensing to continue.'}},
    },
    {
        type: "input",
        message: "What are some frequently asked questions that could assist the user with your application?",
        name: "questions",
        validate: (value) =>{if (value){return true} else{return 'Please provide a list of FAQs to continue.'}},
        
    },
    {
        type: "input",
        message: "What is your Github URL?",
        name: "github",
        validate: (value) =>{if (value){return true} else{return 'Please provide a Github URL to continue.'}},
        
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
        validate: (value) =>{if (value){return true} else{return 'Please provide an email address to continue.'}},
        
    },
    ])
    .then(({
        Title,
        description,
        installation,
        usage,
        collaborators,
        guidelines,
        test,
        technologies,
        license,
        questions,
        github,
        email,
        communication,
    }) => {

const buildreadme = 
`# ${Title}
[![License: ${license}]]

## Table of Contents
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

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Collaborators
${collaborators}

### Contribution guidelines
${guidelines}

## Tests
${test}

## Technologies
${technologies}

## Questions
${questions}

### Contact info
Please feel free to contact me via ${communication}.
* [Gtihub]${github}
* [Email]${email}

# License
${license}`
   
   
    createNewFile(Title, buildreadme);
});

//creates a new file 

function createNewFile (fileName, buildreadme){
 fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, buildreadme, (err)=> {
    err ? console.error(err) : console.log('Success!')
 });
 
}
