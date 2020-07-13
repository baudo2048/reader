import login from '/login.js'
var loginPage = login()
loginPage.style.display = 'none'
content.append(loginPage)

import help from './help.js'
var helpComp = help()
helpComp.style.display = 'none'
content.append(helpComp)

import paletta from './paletta.js'
var wPaletta = paletta()
wPaletta.style.display = 'none'
content.append(wPaletta)


import windowDev from './windowDev.js'
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