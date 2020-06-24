import window1 from './window.js'
import page1 from './page1.js'
export default function homeCatalogo() {
var root = document.createElement('div');
root.style.display = 'flex';
root.style.flexDirection = 'column';
root.style.backgroundColor = 'red';
var div_4 = document.createElement('div');
div_4.style.display = 'flex';
div_4.style.backgroundColor = 'green';
var cmd1 = document.createElement('button');
cmd1.style.height = '30px';
var textNode_9 = document.createTextNode('Command 1');
cmd1.append(textNode_9);
cmd1.onclick = ev => {eventManager('homeCatalogo__btn1__Clicked')};;
var button_11 = document.createElement('button');
var textNode_12 = document.createTextNode('Command 2');
button_11.append(textNode_12);
button_11.onclick = ev => {eventManager('homeCatalogo__btn2__Clicked')};;
var btn3 = document.createElement('button');
var textNode_15 = document.createTextNode('Command 3');
btn3.append(textNode_15);
var contentArea = document.createElement('div');
contentArea.style.display = 'flex';
contentArea.style.justifyContent = 'space-around';
var div_19 = document.createElement('div');
div_19.style.margin = '30px 30px 30px 30px';
var p_21 = document.createElement('p');
var textNode_22 = document.createTextNode('Lateral');
p_21.append(textNode_22);
var windowArea = document.createElement('div');
btn3.onclick = ev => {
    var w = window1()
    w.append(page1())
    windowArea.append(w)
};
function showPage1(ev){
    window1.style.visibility = 'visible';
}
function showPage2(ev){
    window2.style.visibility = 'visible';
}
document.registerDefault(showPage1);
document.registerDefault(showPage2)
return root;}