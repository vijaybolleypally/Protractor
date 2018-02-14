var JenkinsClient = require('jenkins-client')
var jobX = JenkinsClient("http://localhost:8080/", "admin", "5a34aa4e094944a5bd1d9e046cd37880", "job_two_fail")
jobX.info(getInfo)
function getInfo (err, statusCode, payload) {
 // console.log("err:"+err)
 // console.log("statusCode:"+statusCode)
 // console.log(payload)
}


console.log("job_two_fail.buildResult(1)")
console.log(jobX.buildResult(1))