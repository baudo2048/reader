const express = require('express');
const path = require('path');

const MobileDetect = require('mobile-detect')

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

    md = new MobileDetect(req.headers['user-agent']);
    if(md.mobile()=="null"){
        res.sendFile(path.join(`${__dirname}/index.html`));
    } else {
res.sendFile(path.join(`${__dirname}/indexMobile.html`));
        
        
    }
    //res.set('Content-Type', 'text/html')
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

        await exec(`python parser.py test`, (error, stdout, stderr) => {
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


//app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

server.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});

console.log("__dirname is + " + __dirname)
app.use(express.static(__dirname));

