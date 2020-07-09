export default function functionName() 
{
var root = document.createElement('div')
root.style.backgroundColor='red'
root.style.width='100px'
root.style.height='100px'
root.class= 'blazingStar'
var h1_5 = document.createElement('h1')
h1_5.append(document.createTextNode( 'el1'))
var p_6 = document.createElement('p')
p_6.append(document.createTextNode( 'el2'))

root.appendChild(h1_5)


root.appendChild(p_6)


return root
}
