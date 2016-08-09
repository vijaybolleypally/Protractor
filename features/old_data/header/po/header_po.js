var Header = function () {
  this.loginUserName = element(by.binding('MultiTenantCtrl.loginUserName'));
  this.signOutLink = $$('.dropdown-menu ul li>a').get(0);
}

module.exports = new Header();