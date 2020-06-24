export default function localComp() {
var root = document.createElement('div');
var p_1 = document.createElement('p');
var textNode_2 = document.createTextNode('Hello local comp');
p_1.append(textNode_2);
var btn1 = document.createElement('button');
var textNode_4 = document.createTextNode('btn1');
btn1.append(textNode_4);
btn1.onclick = ev => {alert('Hello baby')};
root.localEvent = ev => {
    alert('this is a local event');
};
return root;}