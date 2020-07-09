export default function functionName() 
{
var root = document.createElement('div')
root.append(document.createTextNode( 'Hello :hover'))
root.onmouseover = ev => {root.style.backgroundColor = 'yellow';}
root.onmouseleave = ev => {root.style.backgroundColor = 'white'}


return root
}
