import {dispatch} from './events.js';
import {appEvents} from './eventManager.js';

export function hideGroup (){
    dispatch(appEvents.hideBookShelf);
    dispatch(appEvents.hideCounter);
    dispatch(appEvents.hideIndice);
    dispatch(appEvents.hideQuestion);
    dispatch(appEvents.hideTextArea);
    dispatch(appEvents.hideSummary);
}