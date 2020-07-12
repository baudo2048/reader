export default function functionName() 
{
var root = document.createElement('div')
root.className= 'article'
var h1_2 = document.createElement('h1')
h1_2.append(document.createTextNode( 'How to generate a working single html page web app.'))
var p_3 = document.createElement('p')
p_3.append(document.createTextNode( 'Do you want to create a running application as fast as possible?'))
var p_4 = document.createElement('p')
p_4.append(document.createTextNode( 'You need what follow:'))
var p_5 = document.createElement('p')
p_5.append(document.createTextNode( '1. A detailed sketch of what you want to do. Could be a piece of paper or a word document doesn\'t matter'))
var p_6 = document.createElement('p')
p_6.append(document.createTextNode( '2. A language to convert your idea to a running web app. So we use uxlang a language for fast prototaping.'))
var p_7 = document.createElement('p')
p_7.append(document.createTextNode( '3. Skills: javascript, css, html, ... How many time you\'ve searched for solution to problem you can solve with a bunch of line of code.'))
var p_8 = document.createElement('p')
p_8.append(document.createTextNode( '4. A visual tools to construct application from component. You have a list of (check because sometimes code contains errors) reusable component.'))
var h1_9 = document.createElement('h1')
h1_9.append(document.createTextNode( 'What you can do with kate code?'))
var p_10 = document.createElement('p')
p_10.append(document.createTextNode( 'Kate Code helps you split the component to the following files:'))
var p_11 = document.createElement('p')
p_11.append(document.createTextNode( '1. component.ux'))
var p_12 = document.createElement('p')
p_12.append(document.createTextNode( '2. component.script.js'))
var p_13 = document.createElement('p')
p_13.append(document.createTextNode( '3. component.css.js'))
var code_14 = document.createElement('code')
var pre_15 = document.createElement('pre')
pre_15.style.display='block'
var textNode_17 = document.createTextNode('div root\n')
pre_15.append(textNode_17)
var textNode_18 = document.createTextNode('    -backgroundColor red\n')
pre_15.append(textNode_18)
var textNode_19 = document.createTextNode('    .onclick ev => {alert("Hello click")}')
pre_15.append(textNode_19)
var textNode_20 = document.createTextNode('\n')
pre_15.append(textNode_20)
var textNode_21 = document.createTextNode('    h1 \'Hello World')
pre_15.append(textNode_21)
var p_22 = document.createElement('p')
p_22.append(document.createTextNode( 'Una volta capito come scrivere testo possiamo procedere alla scrittura di lunghi articoli, anche direttamente utilizzando il presente editor.'))

code_14.appendChild(pre_15)


root.appendChild(h1_2)


root.appendChild(p_3)


root.appendChild(p_4)


root.appendChild(p_5)


root.appendChild(p_6)


root.appendChild(p_7)


root.appendChild(p_8)


root.appendChild(h1_9)


root.appendChild(p_10)


root.appendChild(p_11)


root.appendChild(p_12)


root.appendChild(p_13)


root.appendChild(code_14)

var h3_23 = document.createElement('h3')
h3_23.append(document.createTextNode( 'Questo è un sotto-capitolo. Sei sicuro di voler continuare?'))
var p_24 = document.createElement('p')
p_24.append(document.createTextNode( 'A questo punto bisogna decidere se continuare o abbandonare'))

root.appendChild(p_22)


root.appendChild(h3_23)


root.appendChild(p_24)



return root
}
