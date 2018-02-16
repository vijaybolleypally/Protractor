var jenkinsapi = require('jenkins-api');

// username/password 
var jenkins = jenkinsapi.init("http://admin1:Open@10.62.64.169:8080/jenkins/");

jenkins.all_jobs(function(err, data) {
function getStatusFromColor(color) {
  return color.indexOf('blue') >= 0? "Pass":"Fail";
}
  if (err){ return console.log(err); }
//  console.log(data[1])
  for(var i = 0; i < data.length; i++) {
      var obj = data[i];
      console.log("Job : "+ obj.name+" is " + getStatusFromColor(obj.color));
  }
});

// Sample Out PUT.
//$ node jen-api.js
//Job : api_test is Pass
//Job : code_deploy is Pass
//Job : dev_unit_tests is Pass
//Job : e2e_tests is Pass
//Job : job_one_pass is Pass
//Job : job_two_fail is Fail
//Job : smoke_test is Pass
