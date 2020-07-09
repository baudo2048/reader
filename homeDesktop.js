import acc1_ from './accordion.js'
import help_27_ from './help.js'
import windowDev from './windowDev.js'
import paletta from './paletta.js'
export default function functionName() 
{
var root = document.createElement('div')
root.style.display='flex'
root.style.flexDirection='column'
root.style.height='100%'
root.style.alignContent='center'
var header = document.createElement('div')
var btn1 = document.createElement('button')
btn1.append(document.createTextNode( 'Nuovo Progetto'))
btn1.style.margin='10px'
btn1.style.backgroundColor='rgb(0, 0, 128)'
btn1.className= 'bttn-pill bttn-md'
var btn2 = document.createElement('button')
btn2.append(document.createTextNode( 'Editor'))

header.appendChild(btn1)

btn2.style.margin='10px'
btn2.style.backgroundColor='rgb(0, 255, 128)'
btn2.className= 'bttn-pill bttn-md'
var btn3 = document.createElement('button')
btn3.append(document.createTextNode( 'Paletta'))

header.appendChild(btn2)

btn3.style.margin='10px'
btn3.style.backgroundColor='rgb(0, 255, 128)'
btn3.className= 'bttn-pill bttn-md'
var div_18 = document.createElement('div')

header.appendChild(btn3)


root.appendChild(header)

div_18.style.display='flex'
div_18.style.flexGrow='1'
var sidebar = document.createElement('div')
sidebar.style.width='250px'
var acc1 = acc1_()
var content = document.createElement('div')

sidebar.appendChild(acc1)

content.style.flexGrow='1'
content.style.backgroundColor='#f3f3f3'
var help_27 = help_27_()

content.appendChild(help_27)


div_18.appendChild(sidebar)


div_18.appendChild(content)


root.appendChild(div_18)



var wPaletta = paletta()
content.append(wPaletta)

var w2 = windowDev()
w2.style.display = 'flex'
content.append(w2)


btn2.onclick = ev =>{
    w2.style.display = 'flex'
}


btn1.onclick = ev => {
    var prjName = (prompt("Nome del progetto (no spazi, no caratteri speciali)")).trim()
    if(prjName=='' || prjName==null){
        return
    }

}

btn3.onclick = ev => {
    wPaletta.style.display = 'flex'
}




return root
}
