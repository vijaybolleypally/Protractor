var appData = require(browser.params.applicationData);
var userData = require(browser.params.userData);

var LoginPage = function () {

  var inputPageElements = $$("input[name='email']");
  var userName = inputPageElements.get(0);
  var pswdFiled = inputPageElements.get(1);
  this.logInBtn = $("button[name=\"loginto\"]");

  this.navigateToBaseUrl = function () {
    browser.get(userData.appUrl);
  }

  this.enterLoginDetails = function (emailId, password) {
    userName.clear().sendKeys(emailId);
    pswdFiled.clear().sendKeys(password);
  }
}

module.exports = new LoginPage();