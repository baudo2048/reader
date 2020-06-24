import ispHeader_9_ from './ispHeader.js';
export default function menu1() {
var menu1Root = document.createElement('div');
menu1Root.style.display = 'flex';
var div_2 = document.createElement('div');
var menu1FileBtn = document.createElement('p');
menu1FileBtn.onclick = (ev) => {eventManager('menu1FileBtnClicked')};;
var textNode_5 = document.createTextNode('File');
menu1FileBtn.append(textNode_5);
var p_6 = document.createElement('p');
var textNode_7 = document.createTextNode('Projects');
p_6.append(textNode_7);
var menu1MenuContent = document.createElement('div');
var ispHeader_9 = ispHeader_9_();
return menu1Root;}