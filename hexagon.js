export default function functionName() 
{
var root = document.createElement('div')
root.varName= 'root'
var h1_2 = document.createElement('h1')
h1_2.append(document.createTextNode( 'Microservice name'))
var p_3 = document.createElement('p')
p_3.append(document.createTextNode( 'microservice description'))

root.appendChild(h1_2)


root.appendChild(p_3)




root.style.backgroundColor = '#80ffff'
return root
}
