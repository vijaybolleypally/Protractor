var homePage = require('../../../features/angular_home/po/home.po.js');
var util = require('../../../utility/utilities.js');
var headerBar = require('../../../features/header_bar/po/header_bar.co.js');
var docs = require('../../../features/docs/po/docs.po.js');
var appData = require(browser.params.applicationData);
var userData = require(browser.params.userData);

exports.toWork = function () {

    describe('Docs Search Specs', function () {

        it('navigate to landing page', function () {
            browser.get(userData.appUrl);
            expect(util.isElementDisplayed(homePage.homeHeader)).toBeTruthy();
        });

        it('navigate to ' + appData.docsHeader + ' page', function () {
            var docsHeaderEle = headerBar.headerBarLeftElements.get(1);
            docsHeaderEle.click();
            expect(util.isElementPresent(docs.searchSpace)).toBeTruthy();
        });

        it('should show search suggestion', function () {
            docs.searchSpace.sendKeys(userData.searchKeywordInDocs);
        });

        it('should fail', function () {
            expect(1).toEqual(2);
        });

        xit('should be skipped from Docs', function () {
        });
    });
};