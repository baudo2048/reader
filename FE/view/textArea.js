import fdiv from '../lib/html.js';
import {register} from '../event/events.js';
import {appEvents, eventManager} from '../event/eventManager.js';

export default  function textarea () {
    
    var activePensiero = 0;
    var pensieri = [];

    var t = fdiv(20,50,document.body.clientWidth-40, document.body.clientHeight-100,0,'black');
    t.style.color = 'white';
    t.style.fontSize = '3em';
    t.style.overflowY = 'auto';
    t.style.textAlign = 'justify';
    t.innerHTML = pensieri[0];
    t.style.visibility = 'hidden';
    
    var nextPensiero = function(e){
        console.log('activePensiero - ' + activePensiero);
        if(activePensiero==pensieri.length-1){
            return;
        }

        activePensiero++;
        t.innerHTML = pensieri[activePensiero].text;

        eventManager(appEvents.counterPensieri, {activePensiero:activePensiero+1, totalPensiero: pensieri.length});
    };

    var prevPensiero = function(e){
        console.log('activePensiero - ' + activePensiero);
        if(activePensiero==0){
            return;
        }

        activePensiero--;
        t.innerHTML = pensieri[activePensiero].text;

        eventManager(appEvents.counterPensieri, {activePensiero:activePensiero+1, totalPensiero: pensieri.length});
    };

    var setPensieri = function(e){
        pensieri = e.detail.pensieri;
    };

    var gotoPensiero = function(e){
        let p = e.detail.numPensiero;
        if(p<=0 || p>pensieri.length){
            return;
        }

        activePensiero = p-1;
        t.innerHTML = pensieri[activePensiero].text;

        eventManager(appEvents.counterPensieri, {activePensiero:activePensiero+1, totalPensiero: pensieri.length});
    };

    var editCurrentPensiero = function(e){
        var divEdit = fdiv(20,50,document.body.clientWidth-40, document.body.clientHeight-100,1,'black');
        var textarea = document.createElement('textarea');
        textarea.value = pensieri[activePensiero].text;
        
        textarea.style.width = '100%';
        textarea.style.height = '80%';

        var save = document.createElement('button');
        save.style.zIndex = 10;
        save.innerHTML = 'save';

        save.onclick = ev => {
            pensieri[activePensiero].text = textarea.value;
            divEdit.remove(textarea, save);

            t.innerHTML = pensieri[activePensiero].text;
        };

        divEdit.append(textarea, save);
        document.body.appendChild(divEdit);
    };

    function showTextArea (ev) {
        t.style.visibility = 'visible';
    }

    function hideTextArea (ev) {
        t.style.visibility = 'hidden';
    }

    document.addEventListener(appEvents.nextPensiero, nextPensiero);
    document.addEventListener(appEvents.prevPensiero, prevPensiero);
    document.addEventListener(appEvents.setPensieri, setPensieri);
    document.addEventListener(appEvents.gotoPensiero, gotoPensiero);
    document.addEventListener(appEvents.editCurrentPensiero, editCurrentPensiero);
    document.addEventListener(appEvents.showTextArea, showTextArea);
    document.addEventListener(appEvents.hideTextArea, hideTextArea);

    return t;
}

