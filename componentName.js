export default function functionName() 
{
var root = document.createElement('div')
var h1_1 = document.createElement('h1')
h1_1.append(document.createTextNode( 'Hello World'))
var a_2 = document.createElement('a')
a_2.append(document.createTextNode( 'kate-code'))
a_2.href= 'http://katecode.herokuapp.com'

root.appendChild(h1_1)


root.appendChild(a_2)

root.style.backgroundColor = 'blue'

return root
}
