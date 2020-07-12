export default function functionName() 
{
var root = document.createElement('div')
root.style.display='flex'
root.style.position='fixed'
root.style.width='660px'
root.style.height='580px'
root.style.top='53px'
root.style.left='249px'
root.style.flexDirection='column'
root.style.border='3px solid black'
root.style.overflow='none'
root.style.zIndex='100'
root.style.boxSizing='border-box'
var topBar = document.createElement('div')
topBar.style.display='flex'
topBar.style.justifyContent='space-between'
topBar.style.alignItems='center'
topBar.style.backgroundColor='#f3f3f3'
var div_17 = document.createElement('div')
div_17.style.display='flex'
var windowImgMove = document.createElement('img')
windowImgMove.src= './img/baseline_open_with_black_18dp.png'
var imgCode = document.createElement('img')

div_17.appendChild(windowImgMove)

imgCode.style.cursor='pointer'
imgCode.onmouseover = ev => {imgCode.src="./img/baseline_code_black_18dp.png"}
imgCode.onmouseleave = ev => {imgCode.src="./img/baseline_code_white_18dp.png"}
imgCode.src= './img/baseline_code_white_18dp.png'
var imgScript = document.createElement('img')

div_17.appendChild(imgCode)

imgScript.src= './img/baseline_description_black_18dp.png'
var imgCss = document.createElement('img')

div_17.appendChild(imgScript)

imgCss.src= './img/baseline_text_format_black_18dp.png'
var imgSaveAlt = document.createElement('img')

div_17.appendChild(imgCss)

imgSaveAlt.src= './img/baseline_save_black_18dp.png'
var imgPreview = document.createElement('img')

div_17.appendChild(imgSaveAlt)

imgPreview.src= './img/baseline_preview_black_18dp.png'
var imgDesign = document.createElement('img')

div_17.appendChild(imgPreview)

imgDesign.src= './img/baseline_design_services_black_18dp.png'
var imgDownload = document.createElement('img')

div_17.appendChild(imgDesign)

imgDownload.src= './img/baseline_get_app_black_18dp.png'
var div_38 = document.createElement('div')

div_17.appendChild(imgDownload)


topBar.appendChild(div_17)

div_38.style.display='flex'
div_38.style.flexGrow='1'
var fileName = document.createElement('input')
fileName.style.width='100%'
fileName.style.height='30px'
fileName.style.marginLeft='10px'
fileName.style.marginRight='10px'
fileName.style.fontSize='large'
fileName.type= 'text'
fileName.value= 'fileName.ux'
var div_49 = document.createElement('div')

div_38.appendChild(fileName)


topBar.appendChild(div_38)

div_49.style.display='flex'
var windowImgMaximize = document.createElement('img')
windowImgMaximize.style.cursor='pointer'
windowImgMaximize.src= './img/baseline_aspect_ratio_black_18dp.png'
var windowImgClose = document.createElement('img')

div_49.appendChild(windowImgMaximize)

windowImgClose.style.cursor='pointer'
windowImgClose.src= './img/baseline_highlight_off_black_18dp.png'
var contentArea = document.createElement('div')

div_49.appendChild(windowImgClose)


topBar.appendChild(div_49)


root.appendChild(topBar)

contentArea.style.display='none'
contentArea.style.flexGrow='1'
contentArea.style.backgroundColor='white'
var codeArea = document.createElement('div')

root.appendChild(contentArea)

codeArea.style.display='flex'
codeArea.style.flexGrow='1'
var textareaCode = document.createElement('textarea')
textareaCode.style.resize='none'
textareaCode.style.width='100%'
textareaCode.style.height='100%'
textareaCode.style.fontFamily='Consolas, "Courier New", monospace'
textareaCode.style.fontSize='14px'
textareaCode.style.backgroundColor='black'
textareaCode.style.color='white'
var textareaScript = document.createElement('textarea')

codeArea.appendChild(textareaCode)

textareaScript.style.resize='none'
textareaScript.style.width='100%'
textareaScript.style.height='100%'
textareaScript.style.fontFamily='Consolas, "Courier New", monospace'
textareaScript.style.fontSize='14px'
textareaScript.style.backgroundColor='black'
textareaScript.style.color='white'
textareaScript.style.display='none'
var textareaCss = document.createElement('textarea')

codeArea.appendChild(textareaScript)

textareaCss.style.resize='none'
textareaCss.style.width='100%'
textareaCss.style.height='100%'
textareaCss.style.fontFamily='Consolas, "Courier New", monospace'
textareaCss.style.fontSize='14px'
textareaCss.style.backgroundColor='black'
textareaCss.style.color='white'
textareaCss.style.display='none'
var resizer = document.createElement('div')

codeArea.appendChild(textareaCss)


root.appendChild(codeArea)

resizer.style.position='absolute'
resizer.style.width='3px'
resizer.style.height='3px'
resizer.style.borderRadius='50%'
resizer.style.border='3px solid #4286f4'
resizer.style.right='-5px'
resizer.style.bottom='-5px'
resizer.style.cursor='nwse-resize'

root.appendChild(resizer)

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



return root
}
