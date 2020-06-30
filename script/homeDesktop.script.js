import window from './window.js'
import page1 from './page1.js'  // Questi li posso importare anche in maniera dinamica
import windowDev from './windowDev.js'
import input1 from './input.js'

var w2 = windowDev()
w2.style.display = 'flex'
content.append(w2)

var w = window();
w.style.display = 'none'
content.append(w);

w.ondragover = ev => {
    ev.preventDefault()
}

w.ondrop = ev => {
    ev.preventDefault()

    // IF DIV THEN BLA BLA
    w.contentArea.append(page1())
}

btn1.onclick = ev=>{
    w.style.display = 'flex'
}

btn2.onclick = ev =>{
    w2.style.display = 'flex'
}

btn3.onclick = ev => {
    
    import('./modal.js').then(m => {
        console.log('btn3 clicked')
        const mod1 = m.default()
        mod1.contentArea.innerHTML = ''
        mod1.contentArea.append(input1())

        mod1.continuaBtn.onclick = ev => {
            mod1.style.display = 'none'
        }
        // mod1 = mod1.createModal(document.createTextNode('hello'), document.createTextNode('lorem'), ev => {
        //     alert('cclicked')
        // })

        mod1.style.display = 'flex'

        content.append(mod1)
    })
}


// Qui attacco il contenuto di file e cartelle al mio accordion