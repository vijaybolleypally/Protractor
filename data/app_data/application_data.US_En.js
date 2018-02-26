var userData = require('../run_data/user_data');
var appData = function () {
    this.currentLang = "US_En";
    this.getStartedBtnText = "Get Started";
    this.headlineHeroLogoText1 = "One framework";
    this.headlineHeroLogoText2 = "Mobile and desktop.";
    this.featuresHeader = "Features";
    this.docsHeader = "Docs";
    this.resourcesHeader = "Resources";
    this.eventsHeader = "Events";
    this.blogHeader = "Blog";
};

module.exports = new appData();
