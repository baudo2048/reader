export default function functionName() 
{
var root = document.createElement('div')
root.className= 'article'
var h1_2 = document.createElement('h1')
h1_2.append(document.createTextNode( 'The Footer Element'))
var p_3 = document.createElement('p')
p_3.append(document.createTextNode( 'Lorem ipsum coso non so menga'))
var code_4 = document.createElement('code')
var pre_5 = document.createElement('pre')
pre_5.style.display='block'
var textNode_7 = document.createTextNode('div root\n')
pre_5.append(textNode_7)
var textNode_8 = document.createTextNode('    -backgroundColor red\n')
pre_5.append(textNode_8)
var textNode_9 = document.createTextNode('    .onclick ev => {alert("Hello click")}')
pre_5.append(textNode_9)
var textNode_10 = document.createTextNode('\n')
pre_5.append(textNode_10)
var textNode_11 = document.createTextNode('    h1 \'Hello World')
pre_5.append(textNode_11)
var p_12 = document.createElement('p')
p_12.append(document.createTextNode( 'Una volta capito come scrivere testo possiamo procedere alla scrittura di lunghi articoli, anche direttamente utilizzando il presente editor.'))

code_4.appendChild(pre_5)


root.appendChild(h1_2)


root.appendChild(p_3)


root.appendChild(code_4)

var h3_13 = document.createElement('h3')
h3_13.append(document.createTextNode( 'Questo è un sotto-capitolo. Sei sicuro di voler continuare?'))
var p_14 = document.createElement('p')
p_14.append(document.createTextNode( 'A questo punto bisogna decidere se continuare o abbandonare'))

root.appendChild(p_12)


root.appendChild(h3_13)


root.appendChild(p_14)



return root
}
