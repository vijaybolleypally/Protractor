var appData = require(browser.params.applicationData);
var userData = require(browser.params.userData);

var HeaderBar = function () {

  this.headerBarLeftElements = $$('nav ul li.l-left span');
  this.headerBarRightElements = $$('nav ul li.l-right span')
};

module.exports = new HeaderBar();