import acc1_ from './accordion.js';
import window from './window.js'
import page1 from './page1.js'  // Questi li posso importare anche in maniera dinamica
import windowDev from './windowDev.js'
import input1 from './input.js'
export default function homeDesktop() {
var root = document.createElement('div');
root.style.display = 'flex';
root.style.flexDirection = 'column';
root.style.height = '100%';
var header = document.createElement('div');
header.style.height = '40px';
var btn1 = document.createElement('button');
var textNode_7 = document.createTextNode('OpenWindow');
btn1.append(textNode_7);
var btn2 = document.createElement('button');
header.appendChild(btn1);
var textNode_9 = document.createTextNode('WindowDev');
btn2.append(textNode_9);
var btn3 = document.createElement('button');
header.appendChild(btn2);
var textNode_11 = document.createTextNode('Open Component');
btn3.append(textNode_11);
var div_12 = document.createElement('div');
header.appendChild(btn3);
root.appendChild(header);
div_12.style.display = 'flex';
div_12.style.flexGrow = '1';
var sidebar = document.createElement('div');
sidebar.style.width = '200px';
sidebar.style.backgroundColor = 'cyan';
var acc1 = acc1_();
var content = document.createElement('div');
sidebar.appendChild(acc1);
content.style.flexGrow = '1';
content.style.backgroundColor = 'green';
var textNode_22 = document.createTextNode('content');
content.append(textNode_22);
div_12.appendChild(sidebar);
div_12.appendChild(content);
root.appendChild(div_12);
var w2 = windowDev()
w2.style.display = 'flex'
content.append(w2)
var w = window();
w.style.display = 'none'
content.append(w);
w.ondragover = ev => {
    ev.preventDefault()
}
w.ondrop = ev => {
    ev.preventDefault()
    // IF DIV THEN BLA BLA
    w.contentArea.append(page1())
}
btn1.onclick = ev=>{
    w.style.display = 'flex'
}
btn2.onclick = ev =>{
    w2.style.display = 'flex'
}
btn3.onclick = ev => {
    import('./modal.js').then(m => {
        console.log('btn3 clicked')
        const mod1 = m.default()
        mod1.contentArea.innerHTML = ''
        mod1.contentArea.append(input1())
        mod1.continuaBtn.onclick = ev => {
            mod1.style.display = 'none'
        }
        // mod1 = mod1.createModal(document.createTextNode('hello'), document.createTextNode('lorem'), ev => {
        //     alert('cclicked')
        // })
        mod1.style.display = 'flex'
        content.append(mod1)
    })
}
// Qui attacco il contenuto di file e cartelle al mio accordion
return root;}