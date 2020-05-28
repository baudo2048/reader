import fdiv, {p} from '../lib/html.js';
import {register} from '../event/events.js';
import {appEvents, eventManager} from '../event/eventManager.js';

export default function bookShelf() {
    var root = fdiv(20,50,document.body.clientWidth-40, document.body.clientHeight-100,0,'black');
    root.style.visibility = 'hidden';
    root.style.color = 'white';
    
    var pBook1 = p('Immanuel Kant_ P. Chiodi (ed.) - Critica della ragion pura-UTET (2013)');
    pBook1.style.cursor = 'pointer';
    pBook1.onclick = ev => {
        eventManager(appEvents.itemBookShelfClicked);
    }

    root.appendChild(pBook1);

    /** **************************** PUBLIC ************************************************** */
    function showBookShelf(ev){
        root.style.visibility = 'visible';
    }
    function hideBookShelf(ev){
        root.style.visibility = 'hidden';
    }
    
    register(appEvents.showBookShelf, showBookShelf);
    register(appEvents.hideBookShelf, hideBookShelf);
    return root;
}