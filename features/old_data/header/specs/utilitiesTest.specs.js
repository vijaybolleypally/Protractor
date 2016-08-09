var appData = require(browser.params.applicationData);
var userData = require(browser.params.userData);
var multiTanentPage = require('../../../features/multiTenant/po/tenant_list_po.js');
var util = require('../../../features/utility/utilities.js');


exports.toWork = function () {

  describe('Login Page Tests', function () {

    var noEleme = $$("span[ng-bind='user.companyName']").get(1000);
    it('Pass --- waitForElementToBeClickable', function () {
      util.waitForElementToBeClickable(multiTanentPage.firstTenantLink, util.shortWaitTime);
    });

    it('Fail ---- waitForElementToBeClickable', function () {
      util.waitForElementToBeClickable(noEleme, util.shortWaitTime);
    });

  });
}