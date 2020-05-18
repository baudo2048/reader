var dragged;

var dragStart = (ev) => {
    
    dragged = ev.target;
};

var dragging = (ev) => {
    var rect = ev.target.getBoundingClientRect();
    ev.target.style.top = ev.clientY;
    ev.target.style.left = ev.clientx;
    console.log('top ' + rect.top);
    console.log('top dragged ' + dragged.getBoundingClientRect().top);
};

var click = (ev) => {
    var div = fdiv(ev.clientX, ev.clientY, 50, 50,0);
    div.ondrag = drag;
    document.body.appendChild(div);
};

var resize = (x, y) => {

};

var fdiv = (x, y, w, h, l=-1, bc='black', drag=true) => {
    var div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.width = w+'px';
    div.style.height = h+'px';
    div.style.zIndex = l;
    div.style.left = x+'px';
    div.style.top = y+'px';
    div.style.backgroundColor = bc;
    div.draggable = drag;
    div.ondragstart = dragStart;
    div.ondrag = dragging;
    return div;
};

var adiv = (x=0, y=0, w, h, l=-1, bc='black') => {
    var div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.width = w+'px';
    div.style.height = h+'px';
    div.style.zIndex = l;
    div.style.left = x+'px';
    div.style.top = y+'px';
    div.style.backgroundColor = bc;
    return div;
};


//div.onclick = click;

var dadiv;

var adiv;

var dfdiv;
