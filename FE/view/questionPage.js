import fdiv, {p} from '../lib/html.js';
import {register} from '../event/events.js';
import {appEvents, eventManager} from '../event/eventManager.js';

export default function questionPage() {
    
    var root = fdiv(20,50,document.body.clientWidth-40, document.body.clientHeight-100,0,'black');
    root.style.visibility = 'hidden';

    var textarea = document.createElement('textarea');
    textarea.style.position = 'absolute';
    textarea.style.top = '5px';
    textarea.style.left = '5px';
    textarea.style.width = document.body.clientWidth-55 + 'px';
    textarea.style.height = '20px';
    textarea.style.resize = 'none';

    textarea.onfocus = ev => {
        textarea.style.boxShadow = '1px 1px 21px 4px rgba(102,169,181,1)';
    };

    textarea.onblur = ev => {
        textarea.style.boxShadow = 'none';
    };

    var button = document.createElement('button');
    button.innerHTML = 'salva';
    button.style.position = 'absolute';
    button.style.top = '35px';
    button.onclick = ev => {
        alert('thank you');
        textarea.value = '';
        eventManager(appEvents.saveQuestionButtonClicked);
    };


    root.append(textarea, button);

    /** **************************** PUBLIC ************************************************** */
    function showQuestion(ev){
        root.style.visibility = 'visible';
        textarea.focus();
    }
    function hideQuestion(ev){
        root.style.visibility = 'hidden';
    }

    register(appEvents.showQuestion, showQuestion);
    register(appEvents.hideQuestion, hideQuestion);
    return root;
}