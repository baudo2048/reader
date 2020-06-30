export default function functionName() 
{
var root = document.createElement('div')
root.style.display='flex'
root.style.flexDirection='column'
root.style.height='100%'
var header = document.createElement('div')
var h1_5 = document.createElement('h1')
var textNode_6 = document.createTextNode('Hello Mobile')
h1_5.append(textNode_6)

header.appendChild(h1_5)


root.appendChild(header)


return root
}
