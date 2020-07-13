export default function functionName() 
{
var windowRoot = document.createElement('div')
windowRoot.style.display='flex'
windowRoot.style.position='fixed'
windowRoot.style.width='422px'
windowRoot.style.height='600px'
windowRoot.style.top='0px'
windowRoot.style.left='909px'
windowRoot.style.flexDirection='column'
windowRoot.style.border='3px solid black'
windowRoot.style.overflow='none'
windowRoot.style.zIndex='100'
windowRoot.style.boxSizing='border-box'
var topBar = document.createElement('div')
topBar.style.display='flex'
topBar.style.justifyContent='space-between'
topBar.style.alignItems='center'
topBar.style.backgroundColor='#f3f3f3'
var div_17 = document.createElement('div')
div_17.style.display='flex'
div_17.style.alignContent='center'
var windowImgMove = document.createElement('img')
windowImgMove.src= './img/baseline_open_with_black_18dp.png'
var titleName = document.createElement('h1')

div_17.appendChild(windowImgMove)

titleName.style.margin='0 0 0 0'
titleName.style.padding='0'
var textNode_25 = document.createTextNode('Title')
titleName.append(textNode_25)
var div_26 = document.createElement('div')

div_17.appendChild(titleName)


topBar.appendChild(div_17)

div_26.style.flexGrow='1'
var div_28 = document.createElement('div')

topBar.appendChild(div_26)

var windowImgMaximize = document.createElement('img')
windowImgMaximize.src= './img/baseline_aspect_ratio_black_18dp.png'
var windowImgClose = document.createElement('img')

div_28.appendChild(windowImgMaximize)

windowImgClose.src= './img/baseline_highlight_off_black_18dp.png'
var contentArea = document.createElement('div')

div_28.appendChild(windowImgClose)


topBar.appendChild(div_28)


windowRoot.appendChild(topBar)

contentArea.style.display='flex'
contentArea.style.flexGrow='1'
var resizer = document.createElement('div')

windowRoot.appendChild(contentArea)

resizer.style.position='absolute'
resizer.style.width='3px'
resizer.style.height='3px'
resizer.style.borderRadius='50%'
resizer.style.border='3px solid #4286f4'
resizer.style.right='-5px'
resizer.style.bottom='-5px'
resizer.style.cursor='nwse-resize'

windowRoot.appendChild(resizer)

windowImgClose.onmouseover = ev => {
    windowImgClose.style.filter = 'saturate(8)';
};

windowImgClose.onclick = ev => {
    windowRoot.style.display = 'none';
};

windowImgMaximize.onclick = ev => {
    windowRoot.style.left = '0px';
    windowRoot.style.top = '0px';
    windowRoot.style.width = document.body.clientWidth + 'px';
    windowRoot.style.height = document.body.clientHeight + 'px';
};

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
  
makeResizableDiv(windowRoot, resizer);

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
    
        var rect = windowRoot.getBoundingClientRect();
    
        initX = rect.x;
        initY = rect.y;

        document.body.addEventListener('mousemove', move);
        document.body.addEventListener('mouseup', stopMove);
    });

    function move(e) {
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;

        windowRoot.style.left = initX - newX +'px';
        windowRoot.style.top = initY - newY +'px';
    }
    
    function stopMove() {
        document.body.removeEventListener('mousemove', move);
    }
}

makeMovableDiv(windowRoot, windowImgMove);

  
windowRoot.contentArea = contentArea
windowRoot.titleName = titleName


return windowRoot
}
