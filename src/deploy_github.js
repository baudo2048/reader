const fs = require('fs');
const { exec } = require("child_process");

const home = 'C:/Users/u416183/lab/work/py/htmlLang/htmlLang'
const homeUx = `${home}/app/ux`
const node = 'C:/Users/u416183/lab/work/py/htmlLang/htmlLang/infrastracture/node-v10.15.3-win-x64/node.exe'
const python = 'C:/Users/u416183/lab/work/py/htmlLang/htmlLang/infrastracture/python/python37emb/python.exe'
const git = 'C:/Users/u416183/lab/work/py/htmlLang/htmlLang/infrastracture/PortableGit26/bin/git.exe'
const gitDir = 'C:/Users/u416183/lab/work/git/reader/.git';

// 1. Buildo

// 2. Sposto nella cartella git

// 3. Lancio i tre comandi git

(async () => {
    await exec(`${git} --git-dir=${gitDir} add --all`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    })
})();

(async () => {
    await exec(`${git} --git-dir=${gitDir} commit -m "a message"`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    })
})();

(async () => {
    await exec(`${git} --git-dir=${gitDir} push`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    })
})();

console.log('Deploy complete')