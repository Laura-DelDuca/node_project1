#!/usr/bin/env node
//https://docs.npmjs.com/files/package.json
// understanding "bin"

//https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e
// link index.js and package.json

var validator = require("email-validator");
var axios = require('axios');
const ora = require('ora');
const spinner = ora ({
    text: 'Currently checking your account',
    spinner: {
        interval: 150, 
            //https://github.com/sindresorhus/cli-spinners/blob/master/spinners.json
            frames:  [
                    "⊶",
                    "⊷"
                     ]
    },
});
const chalk = require('chalk');
const figlet = require('figlet');
console.log(chalk.green.bold( figlet.textSync('Hello Friend', {
    font: 'Standard',
    horizontalLayout: 'fitted',
    verticalLayout: 'fitted'
})));

    // Figlet : this also works: 
    // figlet("Hello Friend", function(err, data) {
    //     if (err) {
    //         console.log('Something went wrong...');
    //         console.dir(err);
    //         return;
    //     }
    //     console.log(data)

    // });


    // First test: 
    // var test = validator.validate("leny@test.com");
    // console.log (test);
    // if (test = true){
    //     console.log("Format d'adresse OKAY")
    // }

    // else{
    //     console.log("Format d'adresse incorrect")
    // }

//https://nodejs.org/api/process.html#process_process_argv
// how to retrieve input from the console

let address = process.argv[2];
console.log(chalk.blue('You entered:') + address);
    // Second test with the input:
    //var test = validator.validate(address);
    // console.log (test);
    // if (test) {
    //     console.log("Format d'adresse OKAY")
    // }
    // else {
    //     console.log("Format d'adresse incorrect")
    // }

if (validator.validate (address)) {
    spinner.start();
    //https://www.npmjs.com/package/axios
    // about axios
    axios ({
        method: "get",
        baseURL: 'https://haveibeenpwned.com/api/v2/breachedaccount/' + address,
        headers: {
            'User-Agent' : 'node_project1'
        },
    })

    .then(function (response){
        spinner.stop();
        console.log(address + (chalk.red.bold(' has been compromised. Breaches you were pwned in :' )));
        response.data.forEach(element => {
            // needs {} because of the several "console.log"
            console.log (chalk.red(element.Name));
            console.log (chalk.red (element.Title));
        });
    })

    .catch (function (error){
        spinner.stop();
        if ( error.response.status === 404 ) {
            console.log(address + (chalk.green.bold (' is safe!')));
        }
        else {
            console.log(error);
        }
    });
}
else {
    spinner.stop();
    console.log (address + ' ' + (chalk.white.bgRed.bold('is not a correct email address')));
}

    



