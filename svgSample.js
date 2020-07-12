export default function functionName() 
{
var root = document.createElementNS('http://www.w3.org/2000/svg','svg')
root.style.width='400px'
root.style.height='300px'
root.style.border='1px solid black'
root.setAttribute('viewBox', '0 0 300 300')
root.onclick = ev => {alert('hellobay')}
var circle_6 = document.createElementNS('http://www.w3.org/2000/svg','circle')
circle_6.setAttribute('class', 'blazingStar')
circle_6.setAttribute('cx', '80')
circle_6.setAttribute('cy', '80')
circle_6.setAttribute('r', '30')
circle_6.setAttribute('fill', 'red')

root.appendChild(circle_6)



return root
}
