var homePage = require('../po/home.po.js');
var util = require(browser.params.utilities);
var headerBar = require('../../../features/header_bar/po/header_bar.co.js');
var appData = require(browser.params.applicationData);
var userData = require(browser.params.userData);

exports.toWork = function () {

    describe('Home Page Basic Specs', function () {
        var headerExpectedText = [appData.featuresHeader, appData.docsHeader, appData.eventsHeader, appData.newsHeader, appData.fileHeader];
        var uppers = headerExpectedText.map(function (x) {
            return x.toUpperCase();
        });

        it('home page should be landing page', function () {
            browser.get(userData.appUrl);
            expect(util.isElementDisplayed(homePage.homeHeader)).toBeTruthy();
        });

        it('header should show ' + uppers + ' in left', function () {
            expect(headerBar.headerBarLeftElements.getText()).toEqual(uppers);
        });

        xit('should be skipped', function () {
            expect(headerBar.headerBarLeftElements.getText()).toEqual(uppers);
        });
    });
};