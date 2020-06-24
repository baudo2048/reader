export default function socketClient(){
    const socket = new WebSocket('ws://localhost:3000')
    
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
