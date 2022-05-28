# Cypress-Automation-Opencart
This project intent to test registration feature and login feature on the demo website "https://opencart.abstracta.us/index.php". In this case i decide to use Cypress Automation as a tester tool in order to make the entire testing process automated. 

I choose cypress for the simplicity and because is a great growing automation tool. It is fully JavaScript/MochaJS oriented with specific new APIs to ease the scripting.

Project Setup

-----------------------------------------------------------------------------------------------------------------------------------------------------------

Dependency 

* Node.js v16.15.0
* Cypress v9.07

Install Modules
Go to the project's root folder & run the following command:

***  npm install ***

Next command to install cypress:

*** npm install cypress --save-dev ***


Running your tests with Cypress.js

First, make sure that your project is running locally.

Once your local development is running & ready, open a new terminal, go to the project's root folder & run the command:

*** npm run cypress:open ***

If if all the steps were follow, you'll get a popup window...make sure to click in Register.js or login.js & cypress'll start running the tests.

Notes:

For contributing all tests must passed before requesting a new Pull Request.
