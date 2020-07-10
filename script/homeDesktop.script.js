import windowDev from './windowDev.js'

import paletta from './paletta.js'

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


