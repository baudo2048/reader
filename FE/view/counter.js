import fdiv from '../lib/html.js';
import {register} from '../event/events.js';
import {appEvents, eventManager} from '../event/eventManager.js';

// REGISTERED EVENT
// activePensiero

export default function counter (){
    var d = fdiv(20,document.body.clientHeight-45,150,45,0,'black');
    d.style.color = 'white';
    
    d.style.visibility = 'hidden';

    d.innerHTML = '0 di 0';

    /** ****************************** PUBLIC ************************************************** */
    function setCounter(e){
        //console.log('counter called - ' + e.detail.activePensiero);
        d.innerHTML = e.detail.activePensiero + ' di ' + e.detail.totalPensiero;
    }
    function showCounter(ev){
        d.style.visibility = 'visible';
    }
    function hideCounter (ev){
        d.style.visibility = 'hidden';
    }

    register(appEvents.counterPensieri, setCounter);
    register(appEvents.showCounter, showCounter);
    register(appEvents.hideCounter, hideCounter);

    return d;
}