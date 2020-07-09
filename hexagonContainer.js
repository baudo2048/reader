import h1_ from './hexagonManual.js'
import h2_ from './hexagonManual.js'
export default function functionName() 
{
var root = document.createElement('div')
var h1 = h1_()
var h3_2 = document.createElement('h3')
h3_2.append(document.createTextNode( ' Microservice Name'))
var p_3 = document.createElement('p')
p_3.append(document.createTextNode( 'Description'))
var h2 = h2_()

h1.appendChild(h3_2)


h1.appendChild(p_3)


root.appendChild(h1)


root.appendChild(h2)

h1.style.backgroundColor = 'black'

// creare altre h???



return root
}
