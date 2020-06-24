const express = require('express');
const path = require('path');

const http = require('http')
const app = express();
const port = process.env.PORT || 3000;

const WebSocket = require('ws')

const server = http.createServer(app)

const home = 'C:/Users/u416183/lab/work/py/htmlLang/htmlLang'
const python = 'C:/Users/u416183/lab/work/py/htmlLang/htmlLang/infrastracture/python/python37emb/python.exe'

const wss = new WebSocket.Server({ server: server })

wss.on('connection', socket => {
    console.log('connection...')
    socket.on('message', msg => {
        const req = JSON.parse(msg)
        console.log('Message is ' + JSON.stringify(req))
        if(req.eventName == 'socket.test.request'){
            console.log('test service + ' + JSON.stringify(req.data))
            socket.send(JSON.stringify({eventName: 'socket.test.response', data: 'hello'}))
            return
        }

        if(req.eventName == 'requestCompile'){
            const fileName = req.data.fileName
            const code = req.data.code;

            (async () => {
                await fs.writeFile(`${home}/app/ux/${fileName}`, code, (err)=>{
                    if(err) {
                        console.log('writing error ' + err);
                    } else {
                        console.log('writing success');
                    }    
                });
        
                await exec(`${python} ${home}/lang/parser.py ${fileName.substr(0,fileName.length-3)}`, (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);
                        return;
                    }
                    console.log(`stdout: ${stdout}`);
                    socket.send(JSON.stringify({eventName: "socket.compiler.done"}))
                });
        
            })();
        }
    })
})


const fs = require('fs');
const { exec } = require("child_process");


app.get('/', (req, res) => res.send('Hello World! BiP'));

app.get('/compile', (req, res) => {
    console.log('saving... ' + req.query.code);

    (async () => {
        await fs.writeFile('test.ux', req.query.code, (err)=>{
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
});

app.post('/compile', (req, res) => {
    console.log('saving... ' + req.query.body);

    (async () => {
        console.log('body: ' + req.query.code)
        await fs.writeFile('test.ux', req.body, (err)=>{
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
});

//app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

server.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});

app.use(express.static(__dirname));

