export default function socketHandler(){
document.socket.onmessage(socketEvent => {
    const msg = JSON.parse(socketEvent.data)
    if (msg.eventName != 'socket.test.response') return;
    document.eventManager('socket.test.response', msg.data)
})
document.socket.onmessage(socketEvent => {
    const msg = JSON.parse(socketEvent.data)
    if (msg.eventName != 'socket.compiler.done') return;
    document.eventManager('socket.compiler.done', msg.data)
})
}
