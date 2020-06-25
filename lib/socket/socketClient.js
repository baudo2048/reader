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

    function rest(eventName, msg){
        fetch(`/${eventName}`, {
            method: 'POST',
            body: JSON.stringify({msg})
        }).then( response => {
            document.dispatch(`${eventName}.response`, response)
        })
    }


    function onmessage(handler){
        socket.addEventListener('message', handler);
    }
    
    document.socket = {}

    document.socket.send = send
    document.socket.rest = rest
    document.socket.onmessage = onmessage
}
