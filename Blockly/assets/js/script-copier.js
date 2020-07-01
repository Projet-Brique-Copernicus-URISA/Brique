var fileName = request.body.name;
var fileContent = request.body.content;

const { spawn } = require('child_process');
const process = spawn('python', ['./assets/python/CoperFileWriter.py ', fileName, fileContent]);
process.stdout.on('data', (data) => {
    console.log(data.toString());
});

response.end();         