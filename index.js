#!/usr/bin/env node

//https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e

var validator = require("email-validator");
var axios = require('axios')

    //Just to check if it worked... And it did. 
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
console.log('You entered:' + address);
    //var test = validator.validate(address);
    // console.log (test);
    // if (test) {
    //     console.log("Format d'adresse OKAY")
    // }
    // else {
    //     console.log("Format d'adresse incorrect")
    // }

if (validator.validate (address)) {
    //https://www.npmjs.com/package/axios
    axios ({
        method: "get",
        baseURL: 'https://haveibeenpwned.com/api/v2/breachedaccount/' + address,
        headers: {
            'User-Agent' : 'node_project1'
        },
    })

    .then(function (response){
        console.log(address + 'has problems! :' );
        response.data.forEach(element => 
            console.log (element.Name)

            );
    })

    .catch (function (error){
        if ( error.response.status === 404 ) {
            console.log(address + ' is okay!');
        }
        else {
            console.log(error);
        }
    });
}
else {
    console.log (address + 'is incorrect');
}

    






//https://docs.npmjs.com/files/package.json
//Info pour "bin"

