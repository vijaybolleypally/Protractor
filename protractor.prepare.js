exports.toWork = function (reporter) {
    //  console.log("############# onPrepare Blocked called #############");
    var mkdirp = require('mkdirp');
    var fs = require('fs');

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
}