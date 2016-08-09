exports.toWork = function () {
  var gotoURL = function (url) {
    browser.get(url);
  }
  describe('Multi Tenant Page Tests', function () {
    it('should pass', function () {
      gotoURL("https://angularjs.org");
    });

    it('should pass', function () {
      console.log("Printing pass");
    });

    xit('should skip', function () {
      gotoURL("https://angularjs.org");
    });

    it('should fail', function () {
      gotoURL("https://angular.io");
      browser.sleep(2000);
      expect(1).toEqual(2);
    });
  });
}