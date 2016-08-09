var fs = require('fs');
var defaultEnv = "QA";
var defaultLang = "US_En";
var env = (process.argv[2] == undefined) ? defaultEnv : process.argv[2];
var lang = (process.argv[3] == undefined) ? defaultLang : process.argv[3];
var userFile = "./data/user_data/user_data." + lang + ".Env_" + env + ".js";
var appDataFile = "data/app_data/application_data." + lang + ".js";
var finalDataUsedFrom = "./data/run_data";
if (!fs.existsSync(finalDataUsedFrom)) {
    fs.mkdirSync(finalDataUsedFrom);
}

console.log("Running setUpGlobals task");
console.log("Selected env:" + env);
console.log("Selected lang:" + lang);
console.log("Copied userFile:" + userFile);
console.log("Copied application data file:" + appDataFile);


fs.createReadStream(userFile).pipe(fs.createWriteStream('./data/run_data/user_data.js'));
fs.createReadStream(appDataFile).pipe(fs.createWriteStream('./data/run_data/application_data.js'));

