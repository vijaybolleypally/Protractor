var loginPage = require('../po/login_po.js');
var multiTanentPage = require('../../../features/multiTenant/po/tenant_list_po.js');
var appData = require(browser.params.applicationData);
var userData = require(browser.params.userData);

exports.toWork = function () {
  var emailID = userData.loginEmailID;
  var password = userData.loginPassword;

  describe('Login Page Tests', function () {
    it('should show login page', function () {
      loginPage.navigateToBaseUrl();
      expect(loginPage.logInBtn.isDisplayed()).toBeTruthy();
    });

    it('should login with valid details', function () {
      loginPage.enterLoginDetails(emailID, password);
      loginPage.logInBtn.click();
      expect(multiTanentPage.firstTenantLink.isDisplayed()).toBeTruthy();
    });

    xit('should shpw multiTanentPage', function () {
      multiTanentPage.firstTenantLink.click();
      expect(browser.getTitle()).toEqual(appData.jobsPagetitle);
    });
  });
}