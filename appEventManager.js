export default function eventManager(eventName, msg){
if(eventName=='windowDev.imgPreviewClicked'){
document.rest('requestCompile', msg)
} else if (eventName == 'requestCompile.response') {
document.em('updateContent', msg)
} else if (eventName == 'be4fe.compileComplete') {
document.em('updateContent', msg)
} else if (eventName == 'accordion.test') {
document.socket.send('socket.test.request', msg)
} else if (eventName == 'socket.test.response') {
document.em('h5Response2', msg)
} else if (eventName == 'socket.compiler.done') {
document.em('updateContent', msg)
} else {document.em(eventName,msg)}
}
