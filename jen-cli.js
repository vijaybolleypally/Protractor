var JenkinsClient = require('jenkins-client')
var jobX = JenkinsClient("http://localhost:8080/", "admin1", "Open", "job_two_fail")
jobX.info(getInfo)
function getInfo (err, statusCode, payload) {
  console.log("err:"+err)
  console.log("statusCode:"+statusCode)
  console.log(payload)
}


console.log("job_two_fail.buildResult(1)")
console.log(jobX.buildResult(1))