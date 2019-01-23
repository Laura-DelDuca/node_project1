# CheckMe

Has your account been compromised? Check this out with checkMe ! 

checkMe queries Have I Been Pwned's database and informs you about security breaches associated with your email address. 

## Installation

npm i @lauradelduca1990/checkme

## How to use

Installation completed? Good. You can now check your email address in your console. Simply enter:

checkMe test@test.com

Of course you have to replace the example above with the address you want to check.


## Dependencies

CheckMe would be nothing without: 

+ [email-validator](https://www.npmjs.com/package/email-validator) : validates email adresses (no kidding...)
+ Have I Been Pwned's [API](https://haveibeenpwned.com/)
+ [axios](https://www.npmjs.com/package/axios) : contacts that API

And has been customized with:

+ [ora](https://www.npmjs.com/package/ora) : for the spinner
+ [chalk](https://www.npmjs.com/package/chalk) : for the colors
+ [figlet](https://www.npmjs.com/package/figlet) : for the spinner

