#!/usr/bin/env node
//https://docs.npmjs.com/files/package.json
//Info pour "bin"

//https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e

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

// This also works: 
// figlet("Hello Friend", function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)

// });


    // Just to check if it worked... And it did. 
    // var test = validator.validate("leny@test.com");
    // console.log (test);
    // if (test = true){
    //     console.log("Format d'adresse OKAY")
    // }

    // else{
    //     console.log("Format d'adresse incorrect")
    // }

//https://nodejs.org/api/process.html#process_process_argv
// retrieve the second argument within the console's line - address entered by the user
let address = process.argv[2];
console.log(chalk.blue('You entered:') + address);
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
            //ajout de {} parce qu'il y a maintenant plusieurs console.log
            console.log (chalk.red(element.Name));
            console.log (chalk.red (element.Title));
            //console.log (element.Domain);
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

    



