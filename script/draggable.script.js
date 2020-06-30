import page1 from './page1.js'

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