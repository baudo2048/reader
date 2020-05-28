import {dispatch} from './events.js';
import {hideGroup} from './eventCommonActions.js';
import state from './state.js';

export const appEvents = {
    keydown: 'keydown',

    nextPensiero: 'nextPensiero',
    prevPensiero: 'prevPensiero',
    setPensieri: 'setPensieri',
    gotoPensiero: 'gotoPensiero',
    editCurrentPensiero: 'editCurrentPensiero',
    showTextArea: 'showTextArea',
    hideTextArea: 'hideTextArea',

    counterPensieri: 'counterPensieri',
    showCounter: 'showCounter',
    hideCounter: 'hideCounter',

    toggleSummary: 'toggleSummary',
    addNoteToSummary: 'addNoteToSummary',
    showSummary: 'showSummary',
    hideSummary: 'hideSummary',

    newNote: 'newNote',
    openNote: 'openNote',

    toggleIndice: 'toggleIndice',
    showIndice: 'showIndice',
    hideIndice: 'hideIndice',
    itemIndiceClicked: 'itemIndiceClicked',

    menuButtonClicked: 'menuButtonClicked',
    homeButtonClicked: 'homeButtonClicked',

    toggleMenu: 'toggleMenu',
    showMenu: 'showMenu',
    hideMenu: 'hideMenu',

    showQuestion: 'openQuestion',
    hideQuestion: 'closeQuestion',
    saveQuestionButtonClicked: 'saveQuestionButtonClicked',
    
    menuItemQuestionClicked: 'menuItemQuestionClicked',
    menuItemLibraryClicked: 'menuItemLibraryClicked',

    showBookShelf: 'showBookShelf',
    hideBookShelf: 'hideBookShelf',
    itemBookShelfClicked: 'itemBookShelfClicked'
};

export function eventManager(eventName, msg){
    console.log('eventManager - ' + eventName + ' - ' + JSON.stringify(msg));
    
    if (eventName == appEvents.addNoteToSummary) {
        state.isWritingMode  = false;
        dispatch(appEvents.addNoteToSummary);

    } else if (eventName == appEvents.itemIndiceClicked) {
        state.isWritingMode = false;
        state.isTextareaActive = true;
        hideGroup();
        dispatch(appEvents.showTextArea);
        dispatch(appEvents.showCounter);
        dispatch(appEvents.gotoPensiero, msg);

    } else if (eventName == appEvents.itemBookShelfClicked) {
        state.isWritingMode = false;
        hideGroup();
        dispatch(appEvents.showIndice);

    } else if (eventName == appEvents.menuButtonClicked) {
        state.writingMode = false;
        dispatch(appEvents.toggleMenu);

    } else if (eventName == appEvents.saveQuestionButtonClicked) {
        state.isWritingMode = false;
        dispatch(appEvents.hideQuestion);

    } else if (eventName == appEvents.menuItemQuestionClicked){
        state.isWritingMode = true;
        hideGroup();
        dispatch(appEvents.hideMenu);
        dispatch(appEvents.showQuestion);

    } else if (eventName == appEvents.menuItemLibraryClicked){
        state.isWritingMode = false;
        hideGroup();
        dispatch(appEvents.hideMenu);
        dispatch(appEvents.showBookShelf);

    } else if (eventName == appEvents.homeButtonClicked) {
        state.isWritingMode = false;
        state.isTextareaActive = false;
        hideGroup();
    } else if (eventName == appEvents.counterPensieri){
        dispatch(appEvents.showCounter);
        dispatch(appEvents.counterPensieri, msg);
        
    } else if (appEvents.setPensieri){
        dispatch(appEvents.setPensieri, msg)
    } 
}