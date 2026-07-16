class CustomReporter {

    onBegin(config, suite) {
        console.log('====================================');
        console.log(' Test Execution Started');
        console.log(` Total Tests : ${suite.allTests().length}`);
        console.log('====================================');
    }

    onTestBegin(test) {
        console.log(`\nStarting Test : ${test.title}`);
    }

    onTestEnd(test, result) {
        console.log(`Finished Test : ${test.title}`);
        console.log(`Status : ${result.status}`);
        console.log(`Duration : ${result.duration} ms`);
    }

    onEnd(result) {
        console.log('\n====================================');
        console.log(' Test Execution Completed');
        console.log(`Overall Status : ${result.status}`);
        console.log('====================================');
    }
}

module.exports = CustomReporter;