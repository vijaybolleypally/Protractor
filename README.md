Protractor Test Framework
===================

Hey!!! 
This is an end-to-end test framework designed with **'Protractor'** for AngularJS applications. it runs tests against your application running in a real browser, interacting with it as a user would.

This framework is designed in style that follows [Protractor Styleguide](https://github.com/CarmenPopoviciu/protractor-styleguide)

**Expected Users:**

> - This Framework doesn't provide any information about how to install or use protractor.
>- This framework is intended for intermediate level users who know protractor

**Why & When To Use This Framework:** Our framework has build with below features 
> - Multi language support
> - To run automated tests on multi environment with minimal efforts
> - Run tests in Parallel at suite level
> - Reusable methods for page interactions
> - Customized user actions
> - Html reports for parallel test with failed issues screenshots
> - Page Object Model of Tests
> - Test Results representation in console is made clear Instead of showing '...FFF' [Sample](https://raw.githubusercontent.com/bcaudan/jasmine-spec-reporter/master/screenshot.png)

----------
Project Structure
-------------
![Framework_Strc.png](https://bitbucket.org/repo/8BoAEo/images/2086113539-Framework_Strc.png)

**In Details:**

*data*

: app_data:
    > - Application data stored in files one file for one supported language
    >- File name: application_data.<curnty_lang>.js(Ex:application_data.FR_Fn.js/data/app_data/application_data.US_En.js)

: user_data:
    >- User requited data specific to language and environments
    >- File name:user_data<curnty_lang>.Env_<env>.js(Ex:user_data.FR_Fn.Env_Prod.js/user_data.US_En.Env_QA.js)

: run_data:
    >- Finally data files to be used specific to language and environment will be copied here automatically with task setUpGlobals

**downloads**

 >- File that are downloaded during the test run are stored here(browser download directory is configured to this point)

**features**

 >- All the application elements,methods and tests are stored here in the form of POM(Page object model)

 >- one folder for one feature or one page (depends on application behavior)

 >- Please refer [Rule-05: Group your e2e tests in a structure that makes sense to the structure of your project] of [Protractor Styleguide](https://github.com/CarmenPopoviciu/protractor-styleguide)


*In this framework we used below organization:*
> -   po

        login.po.js: (actual page object file which contains locators and methods)
> -   specs

        login.specs.js(actual spec/test file which contains tests and assertions this file uses po file to interact with browser)
> -   login.suite.js

        suite which calls spec file

**test_reports**
: html_reports:
    >- we used existing plugin(protractor-jasmine2-screenshot-reporter) to get reports Myreports.html with pass,fail and pending test details along with test duration time and test fail screenshots and test run configuration details

: json_reports:
    >- Testresult.json all test result shown in json format

**utility**
: utilities.js:
    > - All utility methods like wait for element display/disappear, wait for click, isElementPresent etc are stored here for usability

: user_actions.js:
    > - All customised user actions like click,type and mouse hover etc are available here and highlight the element before interaction and logging is provided from this file

**gulpfile.js**
> - gulp file with task to run(currently we don’t have any gulp tasks)

> Note1: No changes needed at end user level if you are using framework if you are changing framework please change accordingly

**my.html.report.js**
> - A file which has all configuration specific to protractor-jasmine2-screenshot-reporter

> Refer Note1

**my-styles.css**
> - css changes to default html report protractor-jasmine2-screenshot-reporter

> Refer Note1

**package.json**
> - file contains meta data about our project. Most importantly, it includes the list of dependencies to install from npm when running npm install.

> Refer Note1

**protractor.conf.js**
> - This file shows all of the configuration options that may be passed to Protractor.

>- If you are familiar with protractor I have nothing to say about this file if not please refer
https://github.com/angular/protractor/blob/master/docs/referenceConf.js

>- End user need to change suites section of this file

**protractor.prepare.js**
> - Tasks to perform before the actual test to start.

> Refer Note1

**setUpGlobals.js**
> - Run this file with language and environment details to copy respective data to run_data folder which is being used in tests

> Refer Note1

----------
Demo
-------------

**Prerequisites:**
> - Install Nodejs and NPM (npm version should be 3 +)
> - Run npm install at project root directory (i.e protractortests/)

**How to run and view reports:**

1. Run *node setUpGlobals* with environment and language specific to your test run

    > Example: node setUpGlobals Prod FR_Fn means French language and production env is selected 
    (by default QA and US_En is taken if no info given,and environment name,language is not case sensitive but they keyword that is given
    should match with file name in data folder)

2. Run *protractor protractor.conf.js* to run all suites

     >  protractor protractor.conf.js --suite login [to run only login suite]

3. Open *test_reports/html_reports/Myreports.html* to view run results

 >![sampleReport](https://s31.postimg.org/v7ml3p37v/Sample_repo.png)

4. Test results in console after test run

	>![sampleReport](https://raw.githubusercontent.com/bcaudan/jasmine-spec-reporter/master/screenshot.png)

**How to user application data,user data,utilities and customized user actions:**

1. Our Framework has browser params (userData,applicationData,userActions,utilities)

2. Create a reference to this file where ever you need (at po or specs or in suite)
    Example var appData = require(browser.params.applicationData);
    
3. User its methods with respective parameters

See features/docs/specs/docs_basic.spec.js file for example

----------
Tools Used
-------------

> - protractor(respective dependencies nodejs and npm etc)
> - jasmine2
> - protractor-jasmine2-screenshot-reporter
> - jasmine-spec-reporter