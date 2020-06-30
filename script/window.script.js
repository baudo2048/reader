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


