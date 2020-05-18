
document.addEventListener('keydown', event => {
    console.log(event.key);
    if (event.key=='ArrowDown'){
        document.dispatchEvent(new CustomEvent(appEvents.nextPensiero));
    }

    if (event.key=='ArrowUp'){
        document.dispatchEvent(new CustomEvent(appEvents.prevPensiero));
    }

    if (event.key=='g'){
        let p = prompt('Goto Pensiero', 0);

        document.dispatchEvent(new CustomEvent(appEvents.gotoPensiero, {detail:{numPensiero: p}}));
    }
    
});