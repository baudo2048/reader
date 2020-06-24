export default function windowDev() {
var root = document.createElement('div');
root.style.display = 'flex';
root.style.position = 'fixed';
root.style.width = '500px';
root.style.height = '400px';
root.style.top = '100px';
root.style.left = '300px';
root.style.flexDirection = 'column';
root.style.border = '3px solid black';
root.style.overflow = 'none';
root.style.zIndex = '100';
root.style.boxSizing = 'border-box';
var topBar = document.createElement('div');
topBar.style.display = 'flex';
topBar.style.height = '20px';
topBar.style.backgroundColor = '#f3f3f3';
var windowImgMove = document.createElement('img');
windowImgMove.src = './img/move.png';
var windowImgMaximize = document.createElement('img');
topBar.appendChild(windowImgMove);
windowImgMaximize.src = './img/maximize.png';
var windowImgClose = document.createElement('img');
topBar.appendChild(windowImgMaximize);
windowImgClose.src = './img/close_black.png';
var imgCode = document.createElement('img');
topBar.appendChild(windowImgClose);
imgCode.src = './img/code_black.png';
var imgSaveAlt = document.createElement('img');
topBar.appendChild(imgCode);
imgSaveAlt.src = './img/save_alt_black.png';
var imgPreview = document.createElement('img');
topBar.appendChild(imgSaveAlt);
imgPreview.src = './img/preview_black.png';
var contentArea = document.createElement('div');
topBar.appendChild(imgPreview);
root.appendChild(topBar);
contentArea.style.display = 'none';
contentArea.style.flexGrow = '1';
contentArea.style.backgroundColor = 'white';
var codeArea = document.createElement('div');
root.appendChild(contentArea);
codeArea.style.display = 'flex';
codeArea.style.flexGrow = '1';
var textareaCode = document.createElement('textarea');
textareaCode.style.resize = 'none';
textareaCode.style.width = '100%';
textareaCode.style.height = '100%';
textareaCode.style.fontFamily = 'Consolas, "Courier New", monospace';
textareaCode.style.fontSize = '14px';
textareaCode.style.backgroundColor = 'black';
textareaCode.style.color = 'white';
var resizer = document.createElement('div');
codeArea.appendChild(textareaCode);
root.appendChild(codeArea);
resizer.style.position = 'absolute';
resizer.style.width = '3px';
resizer.style.height = '3px';
resizer.style.borderRadius = '50%';
resizer.style.border = '3px solid #4286f4';
resizer.style.right = '-5px';
resizer.style.bottom = '-5px';
resizer.style.cursor = 'nwse-resize';
root.appendChild(resizer);
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
    contentArea.style.display = 'none'
}
imgPreview.onclick = ev => {
    codeArea.style.display = 'none'
    document.eventManager('windowDev.imgPreviewClicked', {code: textareaCode.value})
}
imgSaveAlt.onclick = ev => {
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
return root;}