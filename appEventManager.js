export default function eventManager(eventName, msg){
if(eventName=='windowDev.imgPreviewClicked'){
document.socket.send('requestCompile', msg)
} else if (eventName == 'be4fe.compileComplete') {
document.dispatch('updateContent', msg)
} else if (eventName == 'accordion.test') {
document.socket.send('socket.test.request', msg)
} else if (eventName == 'socket.test.response') {
document.dispatch('h5Response2', msg)
} else if (eventName == 'socket.compiler.done') {
document.dispatch('updateContent', msg)
} else {document.dispatch(eventName,msg)}
}
