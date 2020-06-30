textareaCode.onkeydown = ev => {
    if(ev.keyCode == 9){
        ev.preventDefault()
        //prendo il caret e aggiungo quattro spazi
        const caretPos = textareaCode.selectionStart
        const startCode1 = 0
        const strFirstLen = (textareaCode.value.substr(0, caretPos)).lenght
        const strLen = (textareaCode.value).lenght
        const strSecondLen = strLen-strFirstLen
        textareaCode.value = textareaCode.value.substr(0, caretPos) + "    " + textareaCode.value.substr(caretPos, strSecondLen)
        textareaCode.selectionStart = textareaCode.selectionStart + 4
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
    contentArea.style.display = 'none'
}

imgScript.onclick = ev => {
    codeArea.style.display = 'flex'
    textareaCode.style.display = 'none'
    textareaScript.style.display = 'block'
    contentArea.style.display = 'none'
}

var count = 0
imgPreview.onclick = ev => {
    count++
    codeArea.style.display = 'none'
    
    var code =document.parser('functionName', textareaCode.value, textareaScript.value)
/*     var script = document.createElement('script')
    script.append(document.createTextNode(code)) */

    // DA OTTIMIZZARE ATTACCA UNO SCRIPT PER OGNI COMPILAZIONE
    //document.body.appendChild(script)

    fetch('/saveGenScript', {
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
    })




    //document.eventManager('windowDev.imgPreviewClicked', {fileName: "test.ux", code: textareaCode.value})
}

imgSaveAlt.onhover = ev => {
    
}

imgSaveAlt.onclick = ev => {
    imgSaveAlt.style.backgroundColor = 'red'
    fetch('/saveAs', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        mode: 'same-origin', 
        cache: 'no-cache', 
        body: JSON.stringify({fileName: fileName.value, code: textareaCode.value, scriptCode: textareaScript.value})
    }).then(res => {
        console.log('saved.')
    })
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
    fetch('/file', {
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
        
    })
})