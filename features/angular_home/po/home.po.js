var appData = require(browser.params.applicationData);
var userData = require(browser.params.userData);

var HomePage = function () {

  this.homeHeader = $('h1.text-headline.hero-logo');

};

module.exports = new HomePage();