const fs = require('fs');
const { exec } = require("child_process");

const home = 'C:/Users/u416183/lab/work/py/htmlLang/htmlLang'
const node = 'C:/Users/u416183/lab/work/py/htmlLang/htmlLang/infrastracture/node-v10.15.3-win-x64/node.exe'


exec(`${node} ${home}/dist/server.js`, (error, stdout, stderr) => {
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