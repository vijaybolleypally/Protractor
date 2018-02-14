def jobName = 'qa-deploy'
job(jobName) {
    steps {
        batchFile('java -versions')
    }
}

job('qa-automation-tests') {
    steps {
        batchFile('java -versions')
    }
    triggers {
        upstream('qa-deploy', 'SUCCESS')
    }
}

//C:\Users\E002961\.jenkins\workspace\job-dsl-from-file
//ERROR: no Job DSL script(s) found at dev_unit_tests_qa_dsl.groovy
//Finished: FAILURE