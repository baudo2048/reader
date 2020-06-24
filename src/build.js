// Deploy into folder ../dist
const fs = require('fs');
const { exec } = require("child_process");

const home = 'C:/Users/u416183/lab/work/py/htmlLang/htmlLang'
const homeUx = `${home}/app/ux`
const node = 'C:/Users/u416183/lab/work/py/htmlLang/htmlLang/infrastracture/node-v10.15.3-win-x64/node.exe'
const python = 'C:/Users/u416183/lab/work/py/htmlLang/htmlLang/infrastracture/python/python37emb/python.exe'

// TODO - CREARE LE CARTELLE DI DESTINAZIONE

fs.writeFileSync(`${home}/dist/index.html`, fs.readFileSync(`${home}/app/index.html`), 'utf8')
fs.writeFileSync(`${home}/dist/app.js`, fs.readFileSync(`${home}/app/app.js`), 'utf8')

fs.writeFileSync(`${home}/dist/lib/event/eventConf.js`, fs.readFileSync(`${home}/app/lib/event/eventConf.js`), 'utf8')
fs.writeFileSync(`${home}/dist/lib/socket/socketClient.js`, fs.readFileSync(`${home}/app/lib/socket/socketClient.js`), 'utf8')

fs.writeFileSync(`${home}/dist/css/style.css`, fs.readFileSync(`${home}/app/assets/css/style.css`), 'utf8')

fs.writeFileSync(`${home}/dist/package.json`, fs.readFileSync(`${home}/package.json`), 'utf8')
fs.writeFileSync(`${home}/dist/css/style.css`, fs.readFileSync(`${home}/app/assets/css/style.css`), 'utf8')
fs.writeFileSync(`${home}/dist/server.js`, fs.readFileSync(`${home}/app/server.js`), 'utf8')
fs.writeFileSync(`${home}/dist/Procfile`, fs.readFileSync(`${home}/Procfile`), 'utf8')

// TODO - FOR EACH IMAGE

exec(`${node} ${home}/lang/eventlang.js ${home}/app/rx/appEventManager.rx ${home}/dist/appEventManager.js ${home}/dist/socketHandler.js`, (error, stdout, stderr) => {
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

console.log('calling homeUx')
fs.readdir(homeUx, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
        (async () => {
            await exec(`${python} ${home}/lang/parser.py ${file.substr(0,file.length-3)}`, (error, stdout, stderr) => {  // 'test'
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
        
        })();
    });
});



console.log('Build complete.')