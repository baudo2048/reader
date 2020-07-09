export default function functionName() 
{
var stepper1Root = document.createElement('div')
stepper1Root.style.display='flex'
stepper1Root.style.flexDirection='column'
var div_3 = document.createElement('div')
var h1_4 = document.createElement('h1')
h1_4.style.textAlign='center'
var textNode_6 = document.createTextNode('NUOVO CONTRATTO')
h1_4.append(textNode_6)
var div_7 = document.createElement('div')

div_3.appendChild(h1_4)


stepper1Root.appendChild(div_3)

div_7.style.display='flex'
div_7.style.justifyContent='space-around'
var div_10 = document.createElement('div')
div_10.style.display='flex'
div_10.style.flexDirection='column'
div_10.style.alignItems='center'
var div_14 = document.createElement('div')
div_14.style.className='stepperBox'
div_14.style.width='50px'
div_14.style.height='20px'
div_14.style.borderRadius='20px'
div_14.style.backgroundColor='blue'
div_14.style.border='1px solid black'
var p_21 = document.createElement('p')

div_10.appendChild(div_14)

var textNode_22 = document.createTextNode('FIRMATARI')
p_21.append(textNode_22)
var div_23 = document.createElement('div')

div_10.appendChild(p_21)


div_7.appendChild(div_10)

div_23.style.display='flex'
div_23.style.flexDirection='column'
div_23.style.alignItems='center'
var div_27 = document.createElement('div')
div_27.style.width='50px'
div_27.style.height='20px'
div_27.style.borderRadius='20px'
div_27.style.backgroundColor='white'
div_27.style.border='1px solid black'
var p_33 = document.createElement('p')

div_23.appendChild(div_27)

var textNode_34 = document.createTextNode('FIRMA')
p_33.append(textNode_34)
var div_35 = document.createElement('div')

div_23.appendChild(p_33)


div_7.appendChild(div_23)

div_35.style.display='flex'
div_35.style.flexDirection='column'
div_35.style.alignItems='center'
var div_39 = document.createElement('div')
div_39.style.width='50px'
div_39.style.height='20px'
div_39.style.borderRadius='20px'
div_39.style.backgroundColor='white'
div_39.style.border='1px solid black'
var p_45 = document.createElement('p')

div_35.appendChild(div_39)

var textNode_46 = document.createTextNode('ESITO')
p_45.append(textNode_46)

div_35.appendChild(p_45)


div_7.appendChild(div_35)


stepper1Root.appendChild(div_7)



return stepper1Root
}
