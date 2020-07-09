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
pre_5.append(document.createTextNode( 'div root'))
var pre_6 = document.createElement('pre')
pre_6.append(document.createTextNode( '    -backgroundColor red'))
var pre_7 = document.createElement('pre')
pre_7.append(document.createTextNode( '    .onclick ev => {alert("Hello click")}'))
var p_8 = document.createElement('p')
p_8.append(document.createTextNode( 'Una volta capito come scrivere testo possiamo procedere alla scrittura di lunghi articoli, anche direttamente utilizzando il presente editor.'))

code_4.appendChild(pre_5)


code_4.appendChild(pre_6)


code_4.appendChild(pre_7)

var h3_9 = document.createElement('h3')
h3_9.append(document.createTextNode( 'Questo è un sotto-capitolo. Sei sicuro di voler continuare?'))
var p_10 = document.createElement('p')
p_10.append(document.createTextNode( 'A questo punto bisogna decidere se continuare o abbandonare'))

root.appendChild(h1_2)


root.appendChild(p_3)


root.appendChild(code_4)


root.appendChild(p_8)


root.appendChild(h3_9)


root.appendChild(p_10)



return root
}
