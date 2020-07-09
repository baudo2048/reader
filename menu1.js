import ispHeader_8_ from './ispHeader.js'
export default function functionName() 
{
var menu1Root = document.createElement('div')
menu1Root.style.display='flex'
var div_2 = document.createElement('div')
var menu1FileBtn = document.createElement('p')
menu1FileBtn.onclick = (ev) => {eventManager('menu1FileBtnClicked')};
var textNode_5 = document.createTextNode('File')
menu1FileBtn.append(textNode_5)
var p_6 = document.createElement('p')
p_6.append(document.createTextNode( 'Projects'))

div_2.appendChild(menu1FileBtn)

var menu1MenuContent = document.createElement('div')
var ispHeader_8 = ispHeader_8_()

menu1MenuContent.appendChild(ispHeader_8)


div_2.appendChild(p_6)


div_2.appendChild(menu1MenuContent)


menu1Root.appendChild(div_2)



return menu1Root
}
