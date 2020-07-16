/** 
 * @file IHM
 * @author Noa Ammirati
 * @author Maxime Dumonteil
 * @author Mathis Lecoeuvre
 * @version 0.1
 */

/**
 * to test the copernicus request
 */

const { spawn } = require('child_process');
const process = spawn('python', ['./assets/python/script-test.py']);
process.stdout.on('data', (data) => {
    console.log(data.toString());
});

response.end();