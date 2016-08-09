var TenantList = function () {
  var companyName = "span[ng-bind='user.companyName']";
  this.allCompaniesList = $$(companyName);
  this.firstTenantLink = this.allCompaniesList.get(0);
}

module.exports = new TenantList();