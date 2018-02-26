var appData = require(browser.params.applicationData);
var userData = require(browser.params.userData);

var HeaderBar = function () {
  this.headerBarLeftElements = $$('aio-top-menu>ul li.ng-star-inserted a[title]');
};

module.exports = new HeaderBar();
