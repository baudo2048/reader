export default function fdiv (x, y, w, h, l=-1, bc='black') {
    var div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.width = w+'px';
    div.style.height = h+'px';
    div.style.zIndex = l;
    div.style.left = x+'px';
    div.style.top = y+'px';
    div.style.backgroundColor = bc;
    return div;
};

export function adiv (x=0, y=0, w, h, l=-1, bc='black') {
    var div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.width = w+'px';
    div.style.height = h+'px';
    div.style.zIndex = l;
    div.style.left = x+'px';
    div.style.top = y+'px';
    div.style.backgroundColor = bc;
    return div;
}

export function p(text='') {
    var dom = document.createElement('p');
    dom.innerHTML = text;

    return dom;
}

export function img(src='') {
    var dom = document.createElement('img');
    dom.src = src;

    return dom;
}

