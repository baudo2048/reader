export default function functionName() 
{
var root = document.createElement('DIV')
root.style.display='flex'
root.style.flexGrow='1'
root.style.backgroundColor='white'
var H1_4 = document.createElement('H1')
H1_4.append(document.createTextNode( 'Hello Subcomponente casino'))

root.appendChild(H1_4)


return root
}
