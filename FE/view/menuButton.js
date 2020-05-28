import fdiv from '../lib/html.js';
import {register} from '../event/events.js';
import {appEvents, eventManager} from '../event/eventManager.js';

/**
 * DISPATCH
 * openMenu
 * CloseMenu
 * 
 * REGISTER
 * itemClicked
 */

export default function menuButton(){
    var img = document.createElement('img');
    img.src = './img/menu.png';

    img.style.width = '36px';
    img.style.height = '36px';

    img.style.position = 'fixed';
    
    img.style.top = '5px';
    img.style.left = '5px';

    img.onclick = ev => {
        eventManager(appEvents.menuButtonClicked);
    };

    return img;
}