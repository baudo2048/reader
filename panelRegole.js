export default function functionName() 
{
var root = document.createElement('div')
root.style.flexGrow='1'
root.style.display='grid'
root.style.gridTemplateColumns='1fr 1fr 1fr'
root.style.gridGap='50px'
root.style.justifyContent='center'
root.style.textAlign='center'
var div_7 = document.createElement('div')
div_7.style.border='1px solid blue'
var p_9 = document.createElement('p')
p_9.append(document.createTextNode( 'lorem 1'))
var img_10 = document.createElement('img')
img_10.src= './img/done_black.png'
var div_12 = document.createElement('div')

div_7.appendChild(p_9)


div_7.appendChild(img_10)


root.appendChild(div_7)

var p_13 = document.createElement('p')
p_13.append(document.createTextNode( 'lorem 2'))
var img_14 = document.createElement('img')
img_14.src= './img/done_black.png'
var div_16 = document.createElement('div')

div_12.appendChild(p_13)


div_12.appendChild(img_14)


root.appendChild(div_12)

var p_17 = document.createElement('p')
p_17.append(document.createTextNode( 'lorem 3'))
var div_18 = document.createElement('div')

div_16.appendChild(p_17)

var p_19 = document.createElement('p')
p_19.append(document.createTextNode( 'lorem 4'))
var div_20 = document.createElement('div')

div_18.appendChild(p_19)

var p_21 = document.createElement('p')
p_21.append(document.createTextNode( 'lorem 5'))
var div_22 = document.createElement('div')

div_20.appendChild(p_21)

var p_23 = document.createElement('p')
p_23.append(document.createTextNode( 'lorem 6'))

div_22.appendChild(p_23)


root.appendChild(div_16)


root.appendChild(div_18)


root.appendChild(div_20)


root.appendChild(div_22)



return root
}
