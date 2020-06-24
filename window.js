export default function window() {
var windowRoot = document.createElement('div');
windowRoot.style.display = 'flex';
windowRoot.style.position = 'fixed';
windowRoot.style.width = '500px';
windowRoot.style.height = '400px';
windowRoot.style.top = '100px';
windowRoot.style.left = '300px';
windowRoot.style.flexDirection = 'column';
windowRoot.style.border = '3px solid black';
windowRoot.style.overflow = 'none';
windowRoot.style.zIndex = '100';
windowRoot.style.boxSizing = 'border-box';
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
var contentArea = document.createElement('div');
topBar.appendChild(windowImgClose);
windowRoot.appendChild(topBar);
var resizer = document.createElement('div');
resizer.style.position = 'absolute';
resizer.style.width = '3px';
resizer.style.height = '3px';
resizer.style.borderRadius = '50%';
resizer.style.border = '3px solid #4286f4';
resizer.style.right = '-5px';
resizer.style.bottom = '-5px';
resizer.style.cursor = 'nwse-resize';
windowRoot.appendChild(contentArea);
windowRoot.appendChild(resizer);
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
return windowRoot;}