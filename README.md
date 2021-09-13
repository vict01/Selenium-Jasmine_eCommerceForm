# Testing the Etherscan Registration form
# This is the test automation framework used to create tests easily to submit registration form.

This framework is made up of the following tools:
```
1. NodeJS: The Runtime environment that allows packaging and manage the dependencies.
2. Jasmine: The testing framework that provides a BDD and easy-to-read syntax 
3. Selenium webdriver: Framework used to automate the actions in the browser and locate elements.
```

## Framework Structure
The relevant framework files are included in the "testing-framework" folder. The framework is based on Page Object model, so that inside the "testing-framework" folder there is a subfolder corresponding to each of the application pages (page-object folders) and additionally there is a folder Components that includes utilities classes, with specific functions that serve to build automated tests more easily. Finally it includes a folder to store the tests (Tests).
##

### In each folder corresponding to each page or view there are:
* A class of constants: which mainly includes the names, selectors and test data corresponding to that page.
* A class of POs (Page Objects) or Elements: that includes the webEments of that page.
* A class of helpers or methods: that includes the specific methods of that page.

### Within testing-framework/components:
* Base page helper: Includes methods that are common to all classes (pages). All the helper classes, of all the pages of the application extend from this.

* Expectations helper: This class includes the main verifications in a generic way, using this class the specific verifications of each page are created.

* HTML helper: Includes HTML tags and attribute names.

* Logger helper: Includes the logger.

* Page helper: It contains specific methods that manipulate the page or the browser itself.

* test-suites Includes the tests to be executed

* Wait helper: Includes methods where expected.

### Within testing-framework/page-object/main_page: 
* Includes methods, elements and properties of the page to be tested.

### Within testing-framework/tests:
* Includes the test to be executed.

## Test Scope and explanation:
```
* negativeTests.spec.js => An attempt is made to submit the form without completing the captcha.
    - Note: Reusing the existing structure and components, other tests can easily be designed.
```

## Requirements Installation:
1. Open terminal console and make sure you are in the root path of the project, and run the command below to install any possible dependencies.
   - npm i
2. In system environment variables, add this line within the path variable: 
    "{originPath}\Selenium-Jasmine_webSiteForm\testing-framework\web-drivers" 
    - Where "originPath" is the place where the project was downloaded/saved.
4. The chrome browser version corresponding to the chrome driver installed, it's 93. If you're using different chrome browser version, You can download the corresponding chrome driver from here: https://chromedriver.chromium.org/downloads.
    Then save this chrome driver inte path mentioned in the previous step.

## Instructions to run the tests:
1. Open terminal console and make sure you are in the root paht of the project, then run the tests by executing "npm test" command.
2. Pay attention while test runs in the browser.
3. Once test finishes to run, in the console terminal you can see the, you can see the testing workflow, with its corresponding steps, validations and final result.
