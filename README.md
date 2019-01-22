#CheckMe

Has your account been compromised? Check this out with checkMe ! 

checkMe queries haveibeenpwned's database and informs you about security breaches associated with your email address. 

##Installation



##How to use

Installation completed? Good. You can now check your email address in your console. Simply type:

checkMe test@test.com

Of course you have to replace the example with the address you want to check.


##Dependencies

CheckMe would be nothing without: 

+ [email-validator](https://www.npmjs.com/package/email-validator) : validates email adresses (no kidding...)
+ Have I Been Pwned's [API] (https://haveibeenpwned.com/)
+ [axios] (https://www.npmjs.com/package/axios) : contacts that API

And has been customized with:

+ ora : for the spinner
+ chalk : for the colors
+ figlet : for the spinner
