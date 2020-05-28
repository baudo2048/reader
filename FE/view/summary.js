import fdiv from '../lib/html.js';
import {register} from '../event/events.js';
import {appEvents, eventManager} from '../event/eventManager.js';

export default function summary(){
    
    var notes = ['note2 lorem ipsum lorem ipusm plor lorem ipsum lorem imspo','note2 lorem ipsum lorem ipusm plor lorem ipsum lorem imspo', 'note2 lorem ipsum lorem ipusm plor lorem ipsum lorem imspo','note2 lorem ipsum lorem ipusm plor lorem ipsum lorem imspo','note2 lorem ipsum lorem ipusm plor lorem ipsum lorem imspo note2 lorem ipsum lorem ipusm plor lorem ipsum lorem imspo note2 lorem ipsum lorem ipusm plor lorem ipsum lorem imspo note2 lorem ipsum lorem ipusm plor lorem ipsum lorem imspo note2 lorem ipsum lorem ipusm plor lorem ipsum lorem imspo note2 lorem ipsum lorem ipusm plor lorem ipsum lorem imspo note2 lorem ipsum lorem ipusm plor lorem ipsum lorem imspo note2 lorem ipsum lorem ipusm plor lorem ipsum lorem imspo note2 lorem ipsum lorem ipusm plor lorem ipsum lorem imspo note2 lorem ipsum lorem ipusm plor lorem ipsum lorem imspo note2 lorem ipsum lorem ipusm plor lorem ipsum lorem imspo note2 lorem ipsum lorem ipusm plor lorem ipsum lorem imspo note2 lorem ipsum lorem ipusm plor lorem ipsum lorem imspo note2 lorem ipsum lorem ipusm plor lorem ipsum lorem imspo note2 lorem ipsum lorem ipusm plor lorem ipsum lorem imspo note2 lorem ipsum lorem ipusm plor lorem ipsum lorem imspo note2 lorem ipsum lorem ipusm plor lorem ipsum lorem imspo note2 lorem ipsum lorem ipusm plor lorem ipsum lorem imsponote2 lorem ipsum lorem ipusm plor lorem ipsum lorem imsponote2 lorem ipsum lorem ipusm plor lorem ipsum lorem imsponote2 lorem ipsum lorem ipusm plor lorem ipsum lorem imsponote2 lorem ipsum lorem ipusm plor lorem ipsum lorem imsponote2 lorem ipsum lorem ipusm plor lorem ipsum lorem imsponote2 lorem ipsum lorem ipusm plor lorem ipsum lorem imsponote2 lorem ipsum lorem ipusm plor lorem ipsum lorem imsponote2 lorem ipsum lorem ipusm plor lorem ipsum lorem imsponote2 lorem ipsum'];
    
    var isDisplayed = false;

    var div = fdiv(20,50,document.body.clientWidth-40, document.body.clientHeight-100,0,'black');
    div.style.color = 'white';
    div.style.fontSize = '16px';
    div.style.textAlign = 'justify';
    div.style.visibility = 'hidden';

    div.style.overflowY = 'auto';

    var render = () => {
        div.innerHTML = '';
        notes.forEach((v,i,a)=>{
            let n = document.createElement('p');

            n.onclick = ev => {
                // Anche qui clicco sulla nota e passo evento generico 
                // tipo notaClicked e nel msg passo le info relative alla nota,
                // ed eventualmente le info per tornare indietro.
                eventManager(appEvents.openNote, {nota:ev.target.innerHTML});
            };

            n.innerHTML = '['+i+'] ' + v;

            let hr = document.createElement('hr');
            div.append(n,hr);
        });
    };

    /********************** PUBLIC ***************** */
    var toggleSummary = function(ev){
 
        isDisplayed = !isDisplayed;
        if(isDisplayed){
            div.style.visibility='visible';
            render();
        } else {
            div.style.visibility='hidden';
        }
    };

    var addNoteToSummary = ev => {
        notes.push(ev.detail.nota);
        render();
    };

    function showSummary (ev) {
        isDisplayed = true;
        div.style.visibility = 'visible';
    }

    function hideSummary (ev) {
        isDisplayed = false;
        div.style.visibility = 'hidden';
    }

    register(appEvents.toggleSummary, toggleSummary);
    register(appEvents.addNoteToSummary, addNoteToSummary);
    register(appEvents.showSummary, showSummary);
    register(appEvents.hideSummary, hideSummary);

    return div;
}