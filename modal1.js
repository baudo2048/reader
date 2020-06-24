export default function modal1() {
var modal1Root = document.createElement('div');
modal1Root.style.display = 'flex';
modal1Root.style.flexDirection = 'column';
modal1Root.style.position = 'absolute';
modal1Root.style.height = '200px';
modal1Root.style.width = '400px';
modal1Root.style.margin = 'auto';
modal1Root.style.left = '0';
modal1Root.style.right = '0';
modal1Root.style.top = '0';
modal1Root.style.bottom = '0';
modal1Root.style.backgroundColor = 'white';
modal1Root.style.border = '3px solid blue';
modal1Root.style.boxShadow = '5px 10px #888888';
modal1Root.style.visibility = 'hidden';
var div_15 = document.createElement('div');
var p_16 = document.createElement('p');
p_16.style.textAlign = 'center';
var textNode_18 = document.createTextNode('PROFILO DI FIRMA');
p_16.append(textNode_18);
var div_19 = document.createElement('div');
div_15.appendChild(p_16);
modal1Root.appendChild(div_15);
var p_20 = document.createElement('p');
p_20.style.textAlign = 'center';
var textNode_22 = document.createTextNode('Seleziona la tipologia di utenza con cui il cliente firmera il contratto');
p_20.append(textNode_22);
var div_23 = document.createElement('div');
div_19.appendChild(p_20);
modal1Root.appendChild(div_19);
var div_24 = document.createElement('div');
div_24.style.display = 'flex';
div_24.style.justifyContent = 'space-between';
var modal1AnnullaBtn = document.createElement('button');
var textNode_28 = document.createTextNode('ANNULLA');
modal1AnnullaBtn.append(textNode_28);
var button_29 = document.createElement('button');
div_24.appendChild(modal1AnnullaBtn);
var textNode_30 = document.createTextNode('CONTINUA');
button_29.append(textNode_30);
div_24.appendChild(button_29);
modal1Root.appendChild(div_23);
modal1Root.appendChild(div_24);
modal1AnnullaBtn.onclick = (ev) => {
    document.eventManager('modal1AnnullaBtnClicked');
};
function showModal1(ev){
    modal1Root.style.visibility = 'visible';
}
function hideModal1(ev){
    modal1Root.style.visibility = 'hidden';
}
document.registerDefault(showModal1);
document.registerDefault(hideModal1);
return modal1Root;}