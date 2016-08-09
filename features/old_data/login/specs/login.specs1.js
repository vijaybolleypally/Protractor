exports.toWork = function () {
  var gotoURL = function (url) {
    browser.get(url);
  }
  describe('Login Page Tests', function () {
    it('should pass', function () {
      gotoURL("https://angularjs.org");
    });

    xit('should skip', function () {
      gotoURL("https://angularjs.org");
    });

    it('should fail', function () {
      gotoURL("http://qa-candidates.phenompeople.com/");
      browser.sleep(2000);
      expect(1).toEqual(2);
    });
  });
}