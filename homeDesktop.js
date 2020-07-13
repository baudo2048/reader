import searchComponent_74_ from './searchComponent.js'
import acc1_ from './accordion.js'
import login from '/login.js'
import help from './help.js'
import paletta from './paletta.js'
import windowDev from './windowDev.js'
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
var btnHome = document.createElement('span')
btnHome.append(document.createTextNode( 'Kate Code'))
btnHome.style.display='flex'
btnHome.style.alignContent='center'
btnHome.style.fontFamily='Segoe UI'
btnHome.style.color='white'
btnHome.style.fontWeight='bold'
btnHome.style.fontSize='13px'
btnHome.style.margin='3px'
btnHome.style.maxHeight='30px'
btnHome.style.backgroundColor='transparent'
btnHome.style.padding='10px'
var btn1 = document.createElement('button')
btn1.append(document.createTextNode( '+ New Project'))

header.appendChild(btnHome)

btn1.style.fontSize='12px'
btn1.style.margin='3px'
btn1.style.maxHeight='30px'
btn1.style.backgroundColor='rgb(0, 0, 128)'
btn1.style.padding='10px'
btn1.className= 'bttn-pill bttn-md'
var ctaExplore = document.createElement('button')
ctaExplore.append(document.createTextNode( 'Explore'))

header.appendChild(btn1)

ctaExplore.style.fontSize='12px'
ctaExplore.style.margin='3px'
ctaExplore.style.maxHeight='30px'
ctaExplore.style.padding='10px'
ctaExplore.style.backgroundColor='#BDF6E2'
ctaExplore.style.fontWeight='bold'
ctaExplore.style.color='#1c1c1c'
ctaExplore.style.cursor='pointer'
var btn2 = document.createElement('button')
btn2.append(document.createTextNode( 'Editor'))

header.appendChild(ctaExplore)

btn2.style.fontSize='12px'
btn2.style.minWidth='60px'
btn2.style.maxHeight='30px'
btn2.style.margin='3px'
btn2.style.padding='10px'
btn2.style.backgroundColor='rgb(66, 184, 221)'
btn2.style.fontWeight='bold'
btn2.style.color='white'
btn2.style.cursor='pointer'
var btn3 = document.createElement('button')
btn3.append(document.createTextNode( 'Paletta'))

header.appendChild(btn2)

btn3.style.fontSize='12px'
btn3.style.minWidth='60px'
btn3.style.maxHeight='30px'
btn3.style.margin='3px'
btn3.style.backgroundColor='rgb(0, 255, 128)'
btn3.style.padding='10px'
btn3.className= 'bttn-pill bttn-md'
var btnHelp = document.createElement('button')
btnHelp.append(document.createTextNode( 'Getting started'))

header.appendChild(btn3)

btnHelp.style.minWidth='60px'
btnHelp.style.maxHeight='30px'
btnHelp.style.fontSize='12px'
btnHelp.style.margin='3px'
btnHelp.style.padding='10px'
btnHelp.style.backgroundColor='rgb(66, 184, 221)'
btnHelp.style.fontWeight='bold'
btnHelp.style.color='white'
btnHelp.style.cursor='pointer'
var div_65 = document.createElement('div')

header.appendChild(btnHelp)


root.appendChild(header)

div_65.style.display='flex'
div_65.style.flexGrow='1'
var sidebar = document.createElement('div')
sidebar.style.display='flex'
sidebar.style.flexDirection='column'
sidebar.style.justifyContent='flex-start'
sidebar.style.alignContent='flex-start'
sidebar.style.width='250px'
var searchComponent_74 = searchComponent_74_()
searchComponent_74.style.margin='30px auto'
var acc1 = acc1_()

sidebar.appendChild(searchComponent_74)

var content = document.createElement('div')

sidebar.appendChild(acc1)

content.style.display='flex'
content.style.overflow='auto'
content.style.flexGrow='1'
content.style.backgroundColor='#f3f3f3'

div_65.appendChild(sidebar)


div_65.appendChild(content)


root.appendChild(div_65)

var loginPage = login()
loginPage.style.display = 'none'
content.append(loginPage)

var helpComp = help()
helpComp.style.display = 'none'
content.append(helpComp)

var wPaletta = paletta()
wPaletta.style.display = 'none'
content.append(wPaletta)


var w2 = windowDev()
w2.style.display = 'flex'
content.append(w2)


btn2.onclick = ev =>{
    helpComp.style.display = 'none'
    w2.style.display = 'flex'
    loginPage.style.display = 'none'

    sidebar.style.display = 'flex'
}


btn1.onclick = ev => {
    var prjName = (prompt("Nome del progetto (no spazi, no caratteri speciali)")).trim()
    if(prjName=='' || prjName==null){
        return
    }

}

btn3.style.display = 'none'
btn3.onclick = ev => {
    wPaletta.style.display = 'flex'
}


btnHelp.onclick = ev => {
    w2.style.display = 'none'
    helpComp.style.display ='flex'
    loginPage.style.display = 'none'

    sidebar.style.display = 'none'

    helpComp.focus()
}

document.register('homeDesktop.showLogin', ev => {
    loginPage.style.display = 'flex'
    w2.style.display = 'none'
    helpComp.style.display = 'none'
})

return root
}
