exports.toWork = function (reporter) {
    //  console.log("############# onPrepare Blocked called #############");
    var mkdirp = require('mkdirp');
    var fs = require('fs');
    var util = require(browser.params.utilities);

    //Delete all previous reports data
    browser.params.aggregateReporting ? console.log("aggregateReporting is ON") : util.deleteFolderRecursive('test_reports/allure-results');
    browser.params.aggregateReporting ? console.log("aggregateReporting is ON") : util.deleteFolderRecursive('target');

    //Browser Settings:
    browser.driver.manage().timeouts().implicitlyWait(2000);
    browser.driver.manage().timeouts().setScriptTimeout(60000);
    browser.driver.manage().window().setPosition(0, 0);
    browser.driver.manage().window().maximize();

    //JsonReporter
    mkdirp.sync('test_reports/json_reports');

    //Spec Reporter
    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({
        displayStacktrace: true,
        displaySpecDuration: true,
        displayPendingSpec: true,
        prefixes: {success: '\u2713 ', failure: 'x ', pending: '* '}
    }));

    //Html Screenshot reporter
    jasmine.getEnv().addReporter(reporter);

    //Using Allure Reporter
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'test_reports/allure-results'
    }));
    jasmine.getEnv().afterEach(function (done) {
        browser.takeScreenshot().then(function (png) {
            allure.createAttachment('Screenshot', function () {
                return new Buffer(png, 'base64')
            }, 'image/png')();
            done();
        })
    });
}