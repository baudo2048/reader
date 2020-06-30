import window1 from './window.js'
import page1 from './page1.js'

btn3.onclick = ev => {
    var w = window1()
    w.append(page1())
    windowArea.append(w)
};

function showPage1(ev){
    window1.style.visibility = 'visible';
}

function showPage2(ev){
    window2.style.visibility = 'visible';
}

document.registerDefault(showPage1);
document.registerDefault(showPage2)