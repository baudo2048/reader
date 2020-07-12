textareaCode.onkeydown = ev => {
    if(ev.keyCode == 9){
        ev.preventDefault()
        //prendo il caret e aggiungo quattro spazi
        const caretPos = textareaCode.selectionStart
        const startCode1 = 0
        const strFirstLen = textareaCode.value.substr(0, caretPos)
        const strLen = textareaCode.value
        const strSecondLen = strLen.length-strFirstLen.length
        textareaCode.value = textareaCode.value.substr(0, caretPos) + "    " + textareaCode.value.substr(caretPos, strSecondLen)
        textareaCode.selectionEnd = caretPos + 4
    } 
}

textareaScript.onkeydown = ev => {
    if(ev.keyCode == 9){
        ev.preventDefault()
        //prendo il caret e aggiungo quattro spazi
        const caretPos = textareaScript.selectionStart
        const startCode1 = 0
        const strFirstLen = textareaScript.value.substr(0, caretPos)
        const strLen = textareaScript.value
        const strSecondLen = strLen.length-strFirstLen.length
        textareaScript.value = textareaScript.value.substr(0, caretPos) + "    " + textareaScript.value.substr(caretPos, strSecondLen)
        textareaScript.selectionEnd = caretPos + 4
    } 
}

textareaCss.onkeydown = ev => {
    if(ev.keyCode == 9){
        ev.preventDefault()
        //prendo il caret e aggiungo quattro spazi
        const caretPos = textareaCss.selectionStart
        const startCode1 = 0
        const strFirstLen = textareaCss.value.substr(0, caretPos)
        const strLen = textareaCss.value
        const strSecondLen = strLen.length-strFirstLen.length
        textareaCss.value = textareaCss.value.substr(0, caretPos) + "    " + textareaCss.value.substr(caretPos, strSecondLen)
        textareaCss.selectionEnd = caretPos + 4
    } 
}

windowImgClose.onmouseover = ev => {
    windowImgClose.style.filter = 'saturate(8)';
}

windowImgClose.onclick = ev => {
    root.style.display = 'none';
}

windowImgMaximize.onclick = ev => {
    root.style.left = '0px';
    root.style.top = '0px';
    root.style.width = document.body.clientWidth + 'px';
    root.style.height = document.body.clientHeight + 'px';
}

imgCode.onclick = ev => {
    codeArea.style.display = 'flex'
    textareaCode.style.display = 'block'
    textareaScript.style.display = 'none'
    textareaCss.style.display = 'none'
    contentArea.style.display = 'none'

    imgCode.style.backgroundColor = 'green'    
    imgScript.style.backgroundColor = 'initial'
    imgCss.style.backgroundColor = 'initial'

    textareaCode.focus()
}

imgScript.onclick = ev => {
    codeArea.style.display = 'flex'
    textareaCode.style.display = 'none'
    textareaScript.style.display = 'block'
    textareaCss.style.display = 'none'
    contentArea.style.display = 'none'

    imgCode.style.backgroundColor = 'initial'    
    imgScript.style.backgroundColor = 'blue'
    imgCss.style.backgroundColor = 'initial'

    textareaScript.focus()
}

imgCss.onclick = ev => {
    codeArea.style.display = 'flex'
    textareaCode.style.display = 'none'
    textareaScript.style.display = 'none'
    textareaCss.style.display = 'block'
    contentArea.style.display = 'none'

    imgCode.style.backgroundColor = 'initial'    
    imgScript.style.backgroundColor = 'initial'
    imgCss.style.backgroundColor = 'red'

    textareaCss.focus()
}

var count = 0
imgPreview.onclick = ev => {
    count++
    codeArea.style.display = 'none'
    
    var code =document.parser('functionName', textareaCode.value, textareaScript.value, textareaCss.value)
/*     var script = document.createElement('script')
    script.append(document.createTextNode(code)) */

    // DA OTTIMIZZARE ATTACCA UNO SCRIPT PER OGNI COMPILAZIONE
    //document.body.appendChild(script)
    //document.json('saveGenScript', {fileName: fileName.value, code: code})
    //document.register('saveGenScript' ev => {
    //    alert(ev.detail)
    //})
    
    document.json('saveGenScript', {fileName: fileName.value, code:code}).then(data=>{
        console.log('saved.')
        //scriptArea.innerHTML = ''
        //scriptArea.append(document.createTextNode(code))
        
        var fileToImport = fileName.value.substr(0,fileName.value.length-3)
        import('./'+fileToImport+'.js?'+count).then(module => {
            var dom = module.default()
            contentArea.style.display = 'flex'
            contentArea.innerHTML = ''
            contentArea.append(dom)
        })
    })

/* fetch('/saveGenScript', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        mode: 'same-origin', 
        cache: 'no-cache', 
        body: JSON.stringify({fileName: fileName.value, code: code})
    }).then(res => {
        console.log('saved.')
        //scriptArea.innerHTML = ''
        //scriptArea.append(document.createTextNode(code))
        
        var fileToImport = fileName.value.substr(0,fileName.value.length-3)
        import('./'+fileToImport+'.js?'+count).then(module => {
            var dom = module.default()
            contentArea.style.display = 'flex'
            contentArea.innerHTML = ''
            contentArea.append(dom)
        })
    }) */




    //document.eventManager('windowDev.imgPreviewClicked', {fileName: "test.ux", code: textareaCode.value})
}

imgSaveAlt.onhover = ev => {
    
}

imgSaveAlt.onclick = ev => {
    imgSaveAlt.style.backgroundColor = 'red'

    document.json('saveAs', {fileName:fileName.value, code:textareaCode.value, scriptCode:textareaScript.value, cssCode:textareaCss.value}).then(data=>{
        console.log('saved')
    })

/*     fetch('/saveAs', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        mode: 'same-origin', 
        cache: 'no-cache', 
        body: JSON.stringify({fileName: fileName.value, code: textareaCode.value, scriptCode: textareaScript.value})
    }).then(res => {
        console.log('saved.')
    }) */
}

function makeResizableDiv(div, resizer) {
    const element = div;
    const currentResizer = resizer;

    currentResizer.addEventListener('mousedown', function(e) {
        e.preventDefault();
        document.body.addEventListener('mousemove', resize);
        document.body.addEventListener('mouseup', stopResize);
    });
    
    function resize(e) {
        element.style.width = e.pageX - element.getBoundingClientRect().left + 'px';
        element.style.height = e.pageY - element.getBoundingClientRect().top + 'px';
    }
    
    function stopResize() {
        document.body.removeEventListener('mousemove', resize);
    }
    
}
  
makeResizableDiv(root, resizer);

function makeMovableDiv(div, resizer){

    var prevX = 0;
    var prevY = 0;
    var initX = 0;
    var initY = 0;

    const element = div;
    const currentResizer = resizer;

    currentResizer.addEventListener('mousedown', function(e){
        e.preventDefault();

        prevX = e.clientX;
        prevY = e.clientY;
    
        var rect = root.getBoundingClientRect();
    
        initX = rect.x;
        initY = rect.y;

        document.body.addEventListener('mousemove', move);
        document.body.addEventListener('mouseup', stopMove);
    });

    function move(e) {
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;

        root.style.left = initX - newX +'px';
        root.style.top = initY - newY +'px';
    }
    
    function stopMove() {
        document.body.removeEventListener('mousemove', move);
    }
}

makeMovableDiv(root, windowImgMove);

  
root.contentArea = contentArea

var v = 0
function updateContent (ev){

/*     (async () => {
        const myModule = await import('./test_0.js');

        contentArea.innerHTML = ''
        contentArea.append(myModule.default())
        contentArea.style.display = 'block'

    })(); */
    console.log('importing...')
    import('./test.js?query='+v).then(module => {
        contentArea.innerHTML = ''
        contentArea.append(module.default())
        contentArea.style.display = 'block'
    }).catch((err)=>{
        console.log('catch - ' + err)
    })

    v++

}

document.registerDefault(updateContent)

document.register('showFile', ev=>{
    count++

    document.json('file', {fileName:ev.detail.fileName}).then(data=>{
        textareaCode.value = data.code
        textareaScript.value = data.scriptCode
        textareaCss.value = data.cssCode
        fileName.value = ev.detail.fileName
        
        var fileToImport = fileName.value.substr(0,fileName.value.length-3)
        import('./'+fileToImport+'.js?'+count).then(module => {
            var dom = module.default()
            contentArea.innerHTML = ''
            contentArea.append(dom)
        })        
    })

/*     fetch('/file', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({fileName: ev.detail.fileName})
      }).then(res=>{
        return res.json()
    }).then(data=>{
        textareaCode.value = data.code
        textareaScript.value = data.scriptCode
        fileName.value = ev.detail.fileName
        
        var fileToImport = fileName.value.substr(0,fileName.value.length-3)
        import('./'+fileToImport+'.js?'+count).then(module => {
            var dom = module.default()
            contentArea.innerHTML = ''
            contentArea.append(dom)
        })
        
    }) */
})

document.register('windowDev.textareaCode.append', ev => {
    
    var riga = ev.detail.varName + '.style.' + ev.detail.propertyName + ' = ' + "'" + ev.detail.propertyValue + "'"
    textareaCss.value = textareaCss.value + '\n' + riga
})


imgDesign.onclick = ev => {
    // Per ogni elemento mouseonover
    // Cambio i bordi
    var stack = []

    
    stack.push(contentArea.children)

    while(stack.length!=0){
        var ch = stack.pop()

        Array.from(ch).forEach( v => {
            if(v.nodeType==1){
                v.onmouseover = ev => {
                    ev.target.style.border = '2px solid orange'
                }
                v.onmouseout = ev => {
                    ev.target.style.border = 'initial'
                }
                v.onclick = ev => {
                    ev.preventDefault()
                    ev.stopPropagation()
                    //Invio il dom alla paletta
                    document.em('paletta', {dom:ev.target})
                }
                stack.push(v.children)
            }
            
        })
    }
    // Per ogni elemento onclick
}

imgDownload.onclick = ev => {
    // Genero il file da scaricare 

    // faccio partire il download
    alert('Work in progress')
}

