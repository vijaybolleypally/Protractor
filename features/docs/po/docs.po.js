var userData = require(browser.params.userData);
var appData = require(browser.params.applicationData);

var Docs = function () {
  this.searchSpace = $('#search-io');
};

module.exports = new Docs();