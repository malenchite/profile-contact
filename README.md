# profile-contact
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
## Description
A simple contact API for converting a website's contact form into an email from a Yahoo account. It makes use of Express and Nodemailer to simplify development. Sensitive data is stored as environment variables for deployment on Heroku.

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [API](#API)
* [License](#License)
* [Credits](#Credits)

## Installation
To install, run the following command:
```
npm install
```

## Usage
Requires node.js to run.

Environment variables that must be defined:  
EMAILUSER - username on Yahoo  
EMAILPWD - application password generated on Yahoo site  
TARGETEMAIL - email to send contact message to  
PERMITTEDHOSTS - space-separated list of domains that can use the API  

Start server with
```
npm start
```

## API
The API for this application is very simple. It only accepts a POST message to the "/contact" route. The body must be JSON with "name", "email", and "message" keys. For example:
```
{
  "name": "Contact Person",
  "email": "contact@contact.com",
  "message": "Contents of contact message"
}
```

On success, the API will return status code 200 with a JSON body of msg: "SUCCESS". If any of the POST components are missing, it will return status code 400 with a string explaining what is missing.

## License  
This application is covered under the **ISC** license. More info can be found here: [ISC](https://opensource.org/licenses/ISC)

## Credits
#### NPM Packages
* [express](https://www.npmjs.com/package/express)  
* [cors](https://www.npmjs.com/package/cors)
* [nodemailer](https://www.npmjs.com/package/nodemailer)