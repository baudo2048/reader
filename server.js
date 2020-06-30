const express = require('express');
const path = require('path');

const http = require('http')
const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const port = process.env.PORT || 3000;

const WebSocket = require('ws')

const server = http.createServer(app)

const home = __dirname; //'C:/Users/u416183/lab/work/py/htmlLang/htmlLang'
const python = path.join(__dirname, 'infrastracture') //'C:/Users/u416183/lab/work/py/htmlLang/htmlLang/infrastracture/python/python37emb/python.exe'

const wss = new WebSocket.Server({ server: server })



const fs = require('fs');
const { exec } = require("child_process");


app.get('/', (req, res) => {

    console.log(JSON.stringify(req.headers))

    res.sendFile(path.join(`${__dirname}/index.html`));
});

app.post('/requestCompile', (req, res, next) => {
    
    console.log('saving... ' + req.body.eventName +'  -  ' + JSON.stringify(req.body.data));

    (async () => {
        console.log('msg.fileName: ' + req.body.fileName)
        await fs.writeFile('test.ux', req.body.data.code, (err)=>{
            if(err) {
                console.log('writing error ' + err);
            } else {
                console.log('writing success');
            }    
        });

        await exec(`${__dirname}/infrastracture/python/python37emb/python.exe ./parser.py ${__dirname}/ux/test.ux`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.log('ok')
            res.send('ok')
        });

    })();
})

/****
 * file
 *  fileName
 */

app.post('/file', (req, res, next) => {
    //req.sendFile(path.join(`${__dirname}/ux/${req.body.data.fileName}`))

    var code = fs.readFileSync(`${__dirname}/ux/${req.body.fileName}`, 'utf8')

    const noExt = req.body.fileName.substr(0,req.body.fileName.length-3)
    var scriptCode = ''
    if (fs.existsSync(`${__dirname}/script/${noExt}.script.js`)) {
        scriptCode = fs.readFileSync(`${__dirname}/script/${noExt}.script.js`, 'utf8')
    }

    

    res.set('Content-Type', 'application/json')
    res.send(JSON.stringify({code:code, scriptCode:scriptCode}))    
})

app.post('/files', (req, res, next)=> {
    
    fs.readdir(`${__dirname}/ux`, (err, filenames)=>{
        if(err){
            return
        }
        
        res.set('Content-Type', 'application/json')
        res.send(JSON.stringify(filenames))
    })
})

app.post('/saveAs', (req, res, next) => {
    console.log('saving ux file...')
    fs.writeFileSync(path.join(__dirname, 'ux', req.body.fileName), req.body.code, 'utf8')
    
    var fileNameScript = req.body.fileName.substr(0,req.body.fileName.length-3)
    try {
        console.log('saving script...')
        fs.writeFileSync(path.join(__dirname, 'script', `${fileNameScript}.script.js`), req.body.scriptCode, 'utf8')
    } catch(err){
        console.error(err)
    }
    console.log('saved')
    res.send('done')
})


app.post('/saveGenScript', (req, res, next) => {
    console.log('saving gen script...')
    var fileNameScript = req.body.fileName.substr(0,req.body.fileName.length-3) + '.js'

    fs.writeFileSync(path.join(__dirname, fileNameScript), req.body.code, 'utf8')
    console.log('saved')
    res.send('done')
})

//app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

server.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});

console.log("__dirname is + " + __dirname)
app.use(express.static(__dirname));

