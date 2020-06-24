export default function socketClient(){
    var HOST = location.origin.replace(/^http/, 'ws')
    const socket = new WebSocket(HOST)    //'ws://localhost:3000'  ws://beppe-reader.herokuapp.com
    
    socket.addEventListener('error', err => {
        console.log('Erro on socket ' + err)
    })
    
    socket.addEventListener('open', socketEvent => {
        console.log('socket opened')
    })

    function send(eventName, msg){
        socket.send(JSON.stringify({eventName: eventName, data: msg}))
    }

    function onmessage(handler){
        socket.addEventListener('message', handler);
    }
    
    document.socket = {}

    document.socket.send = send
    document.socket.onmessage = onmessage
}
