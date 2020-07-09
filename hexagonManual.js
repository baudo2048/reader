export default function functionName() 
{
var root = document.createElement('div')
var p_1 = document.createElement('p')
p_1.append(document.createTextNode( 'No SVG'))
var div_2 = document.createElement('div')
div_2.style.width='150px'
div_2.style.height='150px'
div_2.style.backgroundColor='pink'

root.appendChild(p_1)


root.appendChild(div_2)



return root
}
