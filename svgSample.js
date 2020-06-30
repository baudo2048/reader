export default function functionName() 
{
var root = document.createElementNS('http://www.w3.org/2000/svg','svg')
root.style.width='400px'
root.style.height='300px'
root.setAttribute('viewBox', '0 0 300 300')
root.onclick = ev => {alert('hellobay')}
var circle_5 = document.createElementNS('http://www.w3.org/2000/svg','circle')
circle_5.setAttribute('cx', '80')
circle_5.setAttribute('cy', '80')
circle_5.setAttribute('r', '30')
circle_5.setAttribute('fill', 'red')

root.appendChild(circle_5)


return root
}
