# Demo Amazon

This is a Demo on how to validate different test that uses reading data from a Json file and also the same exists using constants

## Installation

If you face problems when trying to run the scripts try to run npm install in order to validate that the node modules are ok.

## Usage

Once the package.json it been generated you will need to create a script in order to run the tests
"scripts": {
"test:chrome": "testcafe chrome functional/test/ --selector-timeout 15000 -e"
}

In order to run the scripts you can just run the follow command to run both of them
-npm run test:chrome
If you want to run just one of them, you can add .skip afert the fixture like this: fixture.skip

The .env contains non private variables.

NOTE: I have seen that in sometimes when the test script registryAndSearchTest its running it can failed, this due to the response from the API it is not always working, but since we are using it to fill in information it can makes the test fail, which is Ok.
