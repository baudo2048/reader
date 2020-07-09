export default function functionName() 
{
var root = document.createElement('div')
root.style.width='100px'
root.style.height='100px'
root.style.backgroundColor='pink'
root.style.animation='pulsate 1s ease-out'
root.style.animationIterationCount='infinite'
root.style.opacity='1'
root.style.display='flex'
root.style.alignItems='center'
root.style.justifyContent='center'
var h1_10 = document.createElement('h1')
h1_10.append(document.createTextNode( 'buba'))

root.appendChild(h1_10)


return root
}
