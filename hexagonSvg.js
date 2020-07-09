export default function functionName() 
{
var root = document.createElement('div')
var p_1 = document.createElement('p')
p_1.append(document.createTextNode( 'For a (regular) hexagon with side length <i>2a</i>, vertices can be <b> &radic;3a, 0) (2&radic;3a, a) (2&radic;3a, 3a) (&radic;3a, 4a) (0, 3a) (0, a)</b>. This is a hexagon with side length <i>100</i>.</p>'))
var svg_2 = document.createElementNS('http://www.w3.org/2000/svg','svg')
svg_2.setAttribute('width', '175')
svg_2.setAttribute('height', '200')
var polyline_5 = document.createElementNS('http://www.w3.org/2000/svg','polyline')
polyline_5.setAttribute('points', '87,0 174,50 174,150 87,200 0,150 0,50 87,0')
var text_7 = document.createElementNS('http://www.w3.org/2000/svg','text')

svg_2.appendChild(polyline_5)

text_7.setAttribute('x', '30')
text_7.setAttribute('y', '30')
var textNode_10 = document.createTextNode('Hello svg text')
text_7.append(textNode_10)

svg_2.appendChild(text_7)


root.appendChild(p_1)


root.appendChild(svg_2)



return root
}
