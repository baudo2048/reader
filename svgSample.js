export default function svgSample() {
var root = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
root.setAttribute('viewBox','0 0 300 300');
root.onclick = ev => {alert('hellobay')};
var circle_3 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle_3.setAttribute('cx','80');
circle_3.setAttribute('cy','80');
circle_3.setAttribute('r','30');
circle_3.setAttribute('fill','red');
root.appendChild(circle_3);
return root;}