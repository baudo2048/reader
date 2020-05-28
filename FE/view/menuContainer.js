import fdiv, {p, img} from '../lib/html.js';
import {register} from '../event/events.js';
import {appEvents, eventManager} from '../event/eventManager.js';

/**
 * DISPATCH
 * openQuestion
 * itemClicked
 * 
 * REGISTERED
 * openMenu
 * closeMenu
 */
export default function menuContainer () {
    var isOpen = false;

    var div = fdiv(5,45,200,400,1,'cyan');
    
    var iForum = img('./img/forum.png');
    iForum.style.width = '36px';
    iForum.style.height = '36px';

    iForum.style.position = 'fixed';
    iForum.style.zIndex = 100;

    iForum.style.top = '60px';
    iForum.style.left = '9px';

    var iLibrary = img('./img/library.png');
    iLibrary.style.width = '36px';
    iLibrary.style.height = '36px';

    iLibrary.style.position = 'fixed';
    iLibrary.style.zIndex = 100;

    iLibrary.style.top = '100px';
    iLibrary.style.left = '9px';

    var pItem = p('Fai una domanda');
    pItem.style.width = '100px';
    pItem.style.height = '36px';

    pItem.style.position = 'fixed';
    pItem.style.zIndex = 100;

    pItem.style.top = '5opx';
    pItem.style.left = '50px';

    pItem.style.cursor = 'pointer';

    pItem.onclick = ev => {
        eventManager(appEvents.menuItemQuestionClicked);
    };

    var pBooks = p('Libri');
    pBooks.style.width = '100px';
    pBooks.style.height = '36px';

    pBooks.style.position = 'fixed';
    pBooks.style.zIndex = 100;

    pBooks.style.top = '100px';
    pBooks.style.left = '50px';

    pBooks.style.cursor = 'pointer';

    pBooks.onclick = ev => {
        eventManager(appEvents.menuItemLibraryClicked);
    };

    div.append(iForum, pItem, iLibrary, pBooks);

    div.style.visibility = 'hidden';

    /** *************************************** PUBLIC ****************************************************** */
    function toggleMenu(ev){
        isOpen = !isOpen;
        if(isOpen){
            div.style.visibility = 'visible';
        } else {
            div.style.visibility = 'hidden';
        }
    }
    function showMenu(ev){
        isOpen = true;
        div.style.visibility = 'visible';
    }

    function hideMenu(ev){
        isOpen = false;
        div.style.visibility = 'hidden';
    }

    register(appEvents.toggleMenu, toggleMenu);
    register(appEvents.showMenu, showMenu);
    register(appEvents.hideMenu, hideMenu);

    return div;
}