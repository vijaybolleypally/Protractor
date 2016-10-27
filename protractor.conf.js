var myReporterObject = require('./my.html.report.js');
var reporter = myReporterObject.needGlobally;
exports.config = {
    chromeDriver: 'node_modules/chromedriver/lib/chromedriver/chromedriver.exe',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    plugins: [{
        path: 'aurelia.protractor.js'
    }],
    // specs: [
    //   'dragdrop.js'
    // ],
    suites: {
        home: 'features/angular_home/home_test.suite.js',
        docs: 'features/docs/docs_basic.suite.js'
    },
    noGlobals: false,
    getPageTimeout: 30000,
    allScriptsTimeout: 25000,
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            'args': ['--disable-extensions']
        },
        prefs: {
            'downloads': {
                'prompt_for_download': false,
                'directory_upgrade': true,
                'default_directory': './downloads/'
            }
        },
        maxInstances: 3,
        shardTestFiles: true
    },

    beforeLaunch: function () {
        return myReporterObject.beforeLaunchMethod();
    },

    onPrepare: function () {
        require('./protractor.prepare.js').toWork(reporter);
    },

    afterLaunch: function (exitCode) {
        return myReporterObject.afterLaunchMethod(exitCode);
    },

    params: {
        userData: __dirname + "/data/run_data/user_data.js",
        applicationData: __dirname + "/data/run_data/application_data.js",
        userActions: __dirname + "/utility/user_actions",
        utilities: __dirname + "/utility/utilities",
        logging: false,
        aggregateReporting: false
    },

    resultJsonOutputFile: "test_reports/json_reports/Testresult.json",
    restartBrowserBetweenTests: false,
    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 90000,
        print: function () {
        }
    }
};