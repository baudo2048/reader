export default function modal() {
var root = document.createElement('div');
root.style.display = 'flex';
root.style.flexDirection = 'column';
root.style.position = 'absolute';
root.style.height = '200px';
root.style.width = '400px';
root.style.margin = 'auto';
root.style.left = '0';
root.style.right = '0';
root.style.top = '0';
root.style.bottom = '0';
root.style.backgroundColor = 'white';
root.style.border = '3px solid blue';
root.style.boxShadow = '5px 10px #888888';
root.style.visibility = 'visible';
root.style.zIndex = '100';
var div_16 = document.createElement('div');
var title = document.createElement('p');
title.style.textAlign = 'center';
var textNode_19 = document.createTextNode('PROFILO DI FIRMA');
title.append(textNode_19);
var contentArea = document.createElement('div');
div_16.appendChild(title);
root.appendChild(div_16);
var p_21 = document.createElement('p');
p_21.style.textAlign = 'center';
var textNode_23 = document.createTextNode('Seleziona la tipologia di utenza con cui il cliente firmera il contratto');
p_21.append(textNode_23);
var div_24 = document.createElement('div');
contentArea.appendChild(p_21);
root.appendChild(contentArea);
var div_25 = document.createElement('div');
div_25.style.display = 'flex';
div_25.style.justifyContent = 'space-between';
var annullaBtn = document.createElement('button');
var textNode_29 = document.createTextNode('ANNULLA');
annullaBtn.append(textNode_29);
var continuaBtn = document.createElement('button');
div_25.appendChild(annullaBtn);
var textNode_31 = document.createTextNode('CONTINUA');
continuaBtn.append(textNode_31);
div_25.appendChild(continuaBtn);
root.appendChild(div_24);
root.appendChild(div_25);
root.contentArea = contentArea
root.title = title
root.annullaBtn = annullaBtn
root.continuaBtn = continuaBtn
root.style.display = 'none'
root.createModal = (t, c, btn1) => {
    contentArea = c
    title = t
    continuaBtn = btn1
    return root
}
annullaBtn.onclick = ev => {
    root.style.display ='none'
}
return root;}