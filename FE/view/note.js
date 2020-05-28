import fdiv from '../lib/html.js';
import {register} from '../event/events.js';
import {appEvents, eventManager} from '../event/eventManager.js';

/*
    REGISTERED
    showNewNote
    openNote

    ATTENZIONE - ABILITA DISABILITA GLI EVENTI DA TASTIRA DELL'APPLICAZIONE CHE USA IL COMPONENTE
*/

export default function note (){
    var div = fdiv(20,50,document.body.clientWidth-40, document.body.clientHeight-100-200,0,'black');

    var textArea = document.createElement('textarea');
    textArea.rows = 20;
    textArea.cols = 50;

    textArea.style.width = '100%';
    textArea.style.height = '100%';

    var ok = document.createElement('button');
    ok.innerHTML = 'save';
    ok.onclick = ev => {
        // Questo si dovrebbe chiamare generico, cioè non mi interessa addnotetosummary
        // in altri contesti potrebbe essere qualcosaltro,
        // da indicare solo genericamente 'note.ok'
        eventManager(appEvents.addNoteToSummary, {nota: textArea.value});
        //dispatcher(appEvents.addNoteToSummary, {nota: textArea.value});  
        textArea.value = '';
        div.style.visibility='hidden';
    };

    div.append(textArea,ok);
    div.style.visibility = 'hidden';
    
    /** ***************** PUBLIC *********************************************** */
    var newNote = function(ev){
        div.style.visibility='visible';
    };

    var openNote = ev => {
        textArea.value = ev.detail.nota;
        div.style.visibility='visible';
    };

    register(appEvents.newNote, newNote);
    register(appEvents.openNote, openNote);

    return div;
}