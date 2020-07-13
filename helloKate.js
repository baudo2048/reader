export default function functionName() 
{
var root = document.createElement('div')
var h1_1 = document.createElement('h1')
h1_1.append(document.createTextNode( 'Hello World'))
var a_2 = document.createElement('a')
a_2.append(document.createTextNode( 'kate-code'))
a_2.href= 'http://localhost:3000'
var div_4 = document.createElement('div')

root.appendChild(h1_1)


root.appendChild(a_2)

div_4.style.width='100px'
div_4.style.height='100px'
div_4.style.backgroundColor='pink'
div_4.className= 'bttn-gradient bttn-md flyIn'
div_4.onclick = saluta
var h3_10 = document.createElement('h3')
h3_10.append(document.createTextNode( 'click the box'))

div_4.appendChild(h3_10)


root.appendChild(div_4)

function saluta(ev){
    //alert('Altra opzione ' + ev.target.innerHTML)

        

    ev.target.style.backgroundColor = 'blue'

    // Cambiare l'aspetto della pagina
    // Eseguire azioni (per esempio link, salvare su server)
 
}

return root
}
