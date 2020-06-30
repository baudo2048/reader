const fs = require('fs')

var arrOut = []
var arrHandler = []
var currentEvent = ''
var tokens = []

// Leggo argomento con nome file

// Leggo il file da compilare
var code = fs.readFileSync(process.argv[2],'utf8');  //'../rx/appEvent.js'
var codeClean = code.replace('\r', '')
var arrCode = codeClean.split('\n')


// Parser algorith
currentEvent = arrCode[0].trim()
arrOut.push('export default function eventManager(eventName, msg){')
arrOut.push(`if(eventName=='${currentEvent}'){`)

arrHandler.push('export default function socketHandler(){')

arrCode.slice(1).forEach((v,i,a)=>{
    tokens = (v.trim()).split(" ")
    if (tokens.length != 0){
        if(v.substr(0,4)=="    "){
            if(v.substr(4,5) == "send " ){
                console.log('v='+v)
                console.log(tokens[0])
                console.log(tokens[1])
                console.log(tokens.length)
                arrOut.push(`document.socket.send('${tokens[1]}', msg)`)
            }
    
            if(v.substr(4,5) == "disp "){
                console.log('v='+v)
                console.log(tokens[0])
                console.log(tokens[1])
                arrOut.push(`document.dispatch('${tokens[1]}', msg)`)
            }

            if(v.substr(4,5) == "rest "){
                console.log('v='+v)
                console.log(tokens[0])
                console.log(tokens[1])
                arrOut.push(`document.rest('${tokens[1]}', msg)`)
            }
        } else {
            //element
            currentEvent = v.trim()
            if(currentEvent!=''){
                if(currentEvent.length!=0 && tokens.length==1){
                    arrOut.push(`} else if (eventName == '${currentEvent}') {`)
                } else {
                    arrOut.push(`} else if (eventName == '${tokens[0]}') {`)
                    arrHandler.push(`document.socket.onmessage(socketEvent => {`)
                    arrHandler.push(`    const msg = JSON.parse(socketEvent.data)`)
                    arrHandler.push(`    if (msg.eventName != '${tokens[0]}') return;`)
                    arrHandler.push(`    document.eventManager('${tokens[0]}', msg.data)`)
                    arrHandler.push('})')
                }
            }  
        }
    }

})

arrOut.push(`} else {document.dispatch(eventName,msg)}`)
arrOut.push('}')

arrHandler.push('}')

// Scrivo due file: eventManager.js e socketHandler.js
fs.writeFileSync(process.argv[3], '', 'utf8')      //'../dist/appEventManager.js'
arrOut.forEach((v,i,a)=>{
    fs.appendFileSync(process.argv[3], v + '\n', 'utf8');    
})

fs.writeFileSync(process.argv[4], '','utf8')
arrHandler.forEach((v,i,a)=>{
    fs.appendFileSync(process.argv[4], v + '\n', 'utf8');    
})