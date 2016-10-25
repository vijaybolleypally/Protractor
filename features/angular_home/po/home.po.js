var appData = require(browser.params.applicationData);
var userData = require(browser.params.userData);

var HomePage = function () {

  this.homeHeader = $('.hero-logo[src="/resources/images/logos/angular2/angular.svg"]');

};

module.exports = new HomePage();