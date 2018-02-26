var userData = require(browser.params.userData);
var appData = require(browser.params.applicationData);

var Docs = function () {
  this.searchSpace = $('aio-search-box>input[placeholder="Search"]');
};

module.exports = new Docs();
