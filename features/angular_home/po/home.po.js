var appData = require(browser.params.applicationData);
var userData = require(browser.params.userData);

var HomePage = function () {

  this.homeHeader = $('.hero-logo img[src="assets/images/logos/angular/angular.svg"]');
};

module.exports = new HomePage();
