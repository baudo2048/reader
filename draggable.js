import page1 from './page1.js'
export default function draggable() {
var root = document.createElement('div');
var imgTest = document.createElement('img');
imgTest.src = './img/move.png';
var dstart = document.createElement('div');
root.appendChild(imgTest);
dstart.style.width = '300px';
dstart.style.height = '300px';
dstart.style.backgroundColor = 'white';
var draggables = document.createElement('div');
draggables.style.width = '100px';
draggables.style.height = '100px';
draggables.style.backgroundColor = 'red';
draggables.draggable = 'true';
draggables.id = 'draggables';
var droppables = document.createElement('div');
dstart.appendChild(draggables);
root.appendChild(dstart);
droppables.style.width = '300px';
droppables.style.height = '300px';
droppables.style.backgroundColor = 'cyan';
droppables.id = 'droppables';
root.appendChild(droppables);
function drag (ev){
    console.log('drag -' + ev.target.id);
}
function dragStart(ev){
    //ev.preventDefault()
    ev.dataTransfer.setData('text/plain', 'hello');
    ev.dataTransfer.setData('foo', 'bla bla')
    ev.dataTransfer.setDragImage(imgTest, 20,20)
    console.log('dragStart -' + ev.target.id);
}
function dragEnter(ev){
    console.log('dragEnter -' + ev.target.id);
}
function dragEnd(ev){
    console.log('dragEnd -' + ev.target.id);
}
function dragLeave(ev){
    console.log('dragLeave -' + ev.target.id);
}
function dragOver(ev){
    ev.preventDefault()
    console.log('dragOver -' + ev.target.id);
}
function drop(ev){
    //ev.preventDefault()
    console.log('drop -' + ev.target.id + ' - Data: ' + ev.dataTransfer.getData('foo') + ' - ' + ev.dataTransfer.getData('text/plain'));
    var t = document.createTextNode('hello');
    this.append(page1());
}
droppables.ondragover = dragOver
//droppables.ondrop = drop
//draggables.ondragstart = dragStart
//draggables.ondragend = dragEnd
//droppables.ondrag = drag;
//draggables.ondrag = drag;
droppables.ondrop = drop
draggables.ondragstart = dragStart
return root;}