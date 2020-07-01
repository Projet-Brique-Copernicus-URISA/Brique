const { spawn } = require('child_process');
const process = spawn('python', ['./assets/python/script-test.py']);
process.stdout.on('data', (data) => {
    console.log(data.toString());
});

response.end();