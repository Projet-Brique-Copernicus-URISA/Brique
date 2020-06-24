function testExecution(){
    const { spawn } = require('child_process');
    const process = spawn('python', ['./script-test.py']);
    process.stdout.on('data', (data) => {
    console.log(data.toString());
    });
};

function oui(){
    console.log("oui");
}

function evalExec(){
    eval("testExecution();");
}