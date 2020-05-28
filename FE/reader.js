import bookShelf from './view/bookShelf.js';
import counter from './view/counter.js';
import homeButton from './view/homeButton.js';
import indice from './view/indice.js';
import menuButton from './view/menuButton.js';
import menuContainer from './view/menuContainer.js';
import note from './view/note.js';
import questionPage from './view/questionPage.js';
import summary from './view/summary.js';
import textarea from './view/textArea.js';




import appKeydownManager from './event/appKeydownManager.js';

import {appEvents, eventManager} from './event/eventManager.js';

document.body.appendChild(bookShelf());
document.body.appendChild(counter());
document.body.appendChild(homeButton());
document.body.appendChild(indice());
document.body.appendChild(menuButton());
document.body.appendChild(menuContainer());
document.body.appendChild(note());
document.body.appendChild(questionPage());
document.body.appendChild(summary());
document.body.appendChild(textarea());




appKeydownManager();

fetch('http://localhost:3000/pensieri').then(res => {
    res = res.json();
    return res;
}).then(res => {
    console.log('JSONNNNNNNNNNN - ' + res.length);
    eventManager(appEvents.setPensieri, {pensieri: res});
});
