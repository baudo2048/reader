const fs = require('fs');

const { exec } = require("child_process");



//require('log-timestamp');

var uxFile = process.argv[2]; //'page1.ux';
var fileName = uxFile.replace('.ux', '');

console.log(`Watching for file changes on ${uxFile}`);

fs.watchFile(uxFile, (curr, prev) => {
  console.log(`${uxFile} file Changed`);
  exec(`python parser.py ${fileName}`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
});