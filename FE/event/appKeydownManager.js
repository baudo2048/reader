import {register, dispatch} from './events.js';
import {appEvents} from './eventManager.js';
import {hideGroup} from './eventCommonActions.js';
import state from './state.js';


export default function appKeydownManager () {    
    function keyhandler (ev){
        if (event.key=='ArrowDown'){
            if(state.isTextareaActive){
                dispatch(appEvents.nextPensiero);
            }
        }
    
        if (event.key=='ArrowUp'){
            if(state.isTextareaActive){
                dispatch(appEvents.prevPensiero);
            }
        }
    
        if (event.key=='g'){
            if(!state.isWritingMode){
                let p = prompt('Goto Pensiero', 0);
    
                dispatch(appEvents.gotoPensiero, {numPensiero: p});
            }

        }
    
        if (event.key=='e'){
            if(!state.isWritingMode){
                dispatch(appEvents.editCurrentPensiero);
            }
        }
    
        if (event.key=='n'){
            if(!state.isWritingMode){
                hideGroup();
                dispatch(appEvents.toggleSummary);
            }
        }
    
        if (event.key=='+'){
            if(!state.isWritingMode){
                dispatch(appEvents.newNote);
            }
        }
    
        if (event.key=='i'){
            if(!state.isWritingMode){
                hideGroup();
                dispatch(appEvents.toggleIndice);
            }
        }
    }

    register('keydown', keyhandler);
}