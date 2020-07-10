import acc1_ from './accordion.js'
import help_52_ from './help.js'
import windowDev from './windowDev.js'
import paletta from './paletta.js'
export default function functionName() 
{
var root = document.createElement('div')
root.style.display='flex'
root.style.flexDirection='column'
root.style.height='100%'
root.style.alignContent='center'
root.style.background='rgb(2,0,36)'
root.style.background='radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'
var header = document.createElement('div')
header.style.display='flex'
header.style.alignContent='center'
var img_10 = document.createElement('img')
img_10.src= './img/baseline_menu_black_18dp.png'
img_10.style.margin='3px'
img_10.style.padding='10px'
var btnHome = document.createElement('span')

header.appendChild(img_10)

var p_15 = document.createElement('p')
p_15.append(document.createTextNode( 'Kate Code'))
p_15.style.display='flex'
p_15.style.alignContent='center'
p_15.style.fontFamily='Segoe UI'
p_15.style.color='white'
p_15.style.fontWeight='bold'
p_15.style.fontSize='15px'
p_15.style.margin='3px'
p_15.style.backgroundColor='transparent'
p_15.style.padding='10px'
var btn1 = document.createElement('button')
btn1.append(document.createTextNode( 'Nuovo Progetto'))

btnHome.appendChild(p_15)

btn1.style.fontSize='12px'
btn1.style.margin='3px'
btn1.style.backgroundColor='rgb(0, 0, 128)'
btn1.style.padding='10px'
btn1.className= 'bttn-pill bttn-md'
var btn2 = document.createElement('button')
btn2.append(document.createTextNode( 'Editor'))

header.appendChild(btnHome)


header.appendChild(btn1)

btn2.style.fontSize='12px'
btn2.style.margin='3px'
btn2.style.backgroundColor='rgb(0, 255, 128)'
btn2.style.padding='10px'
btn2.className= 'bttn-pill bttn-md'
var btn3 = document.createElement('button')
btn3.append(document.createTextNode( 'Paletta'))

header.appendChild(btn2)

btn3.style.fontSize='12px'
btn3.style.margin='3px'
btn3.style.backgroundColor='rgb(0, 255, 128)'
btn3.style.padding='10px'
btn3.className= 'bttn-pill bttn-md'
var div_43 = document.createElement('div')

header.appendChild(btn3)


root.appendChild(header)

div_43.style.display='flex'
div_43.style.flexGrow='1'
var sidebar = document.createElement('div')
sidebar.style.width='250px'
var acc1 = acc1_()
var content = document.createElement('div')

sidebar.appendChild(acc1)

content.style.flexGrow='1'
content.style.backgroundColor='#f3f3f3'
var help_52 = help_52_()

content.appendChild(help_52)


div_43.appendChild(sidebar)


div_43.appendChild(content)


root.appendChild(div_43)



var wPaletta = paletta()
content.append(wPaletta)
wPaletta.style.display = 'none'

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
