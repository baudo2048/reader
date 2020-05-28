import {appEvents, eventManager} from '../event/eventManager.js';

export default function homeButton(){
    var imgHome = document.createElement('img');
    imgHome.src = './img/home.png';

    imgHome.style.width = '36px';
    imgHome.style.height = '36px';

    imgHome.style.position = 'fixed';
    
    imgHome.style.top = '5px';
    imgHome.style.left = document.body.clientWidth - 45 + 'px';

    imgHome.onclick = ev => {
        eventManager(appEvents.homeButtonClicked);
    };

    return imgHome;
}