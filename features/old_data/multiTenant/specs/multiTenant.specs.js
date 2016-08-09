var loginPage = require('..//../../features/login/po/login_po.js');
var multiTanentPage = require('../../../features/multiTenant/po/tenant_list_po.js');
var appData = require(browser.params.applicationData);
var userData = require(browser.params.userData);

exports.toWork = function () {
  var emailID = userData.loginEmailID;
  var password = userData.loginPassword;

  describe('Multi Tenant Tests', function () {
    it('should shpw multiTanentPage on login', function () {
      loginPage.navigateToBaseUrl();
      expect(loginPage.logInBtn.isDisplayed()).toBeTruthy();
      loginPage.enterLoginDetails(emailID, password);
      loginPage.logInBtn.click();
      expect(multiTanentPage.firstTenantLink.isDisplayed()).toBeTruthy();
    });

    xit('should be capable of logout', function () {
      expect(headerOfPage.loginUserName.isDisplayed()).toBeTruthy();
      headerOfPage.loginUserName.click();
      expect(headerOfPage.signOutLink.isDisplayed()).toBeTruthy();
      headerOfPage.signOutLink.click();
      expect(loginPage.logInBtn.isDisplayed()).toBeTruthy();
    });

    it('should fail', function () {
      expect(1).toEqual(2);
    });
  });
}