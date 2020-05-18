/*
    REGISTERED EVENTS
    prevPensiero
    nextPensiero
    setPensieri
    gotoPensiero

    DISPATCH
    counterPensieri
*/

var textArea = (function (){
    
    var activePensiero = 0;
    var pensieri = [];

    var t = fdiv(20,50,document.body.clientWidth-40, document.body.clientHeight-100,0,'black');
    t.style.color = 'white';
    t.style.fontSize = '3em';
    t.style.textAlign = 'justify';
    t.innerHTML = pensieri[0];
    
    var nextPensiero = function(e){
        if(activePensiero==pensieri.length-1){
            return;
        }

        activePensiero++;
        t.innerHTML = pensieri[activePensiero];

        document.dispatchEvent(new CustomEvent(appEvents.counterPensieri, {detail: {activePensiero: activePensiero+1, totalPensiero: pensieri.length}}));
    };

    var prevPensiero = function(e){
        if(activePensiero==0){
            return;
        }

        activePensiero--;
        t.innerHTML = pensieri[activePensiero];

        document.dispatchEvent(new CustomEvent(appEvents.counterPensieri, {detail: {activePensiero: activePensiero+1, totalPensiero: pensieri.length}}));
    };

    var setPensieri = function(e){
        pensieri = e.detail.pensieri;
    };

    var gotoPensiero = function(e){
        let p = e.detail.numPensiero;
        if(p<=0 || p>pensieri.length){
            return;
        }

        activePensiero = p-1;
        t.innerHTML = pensieri[activePensiero];

        document.dispatchEvent(new CustomEvent(appEvents.counterPensieri, {detail: {activePensiero: activePensiero+1, totalPensiero: pensieri.length}}));
    }

    document.addEventListener(appEvents.nextPensiero, nextPensiero);
    document.addEventListener(appEvents.prevPensiero, prevPensiero);
    document.addEventListener(appEvents.setPensieri, setPensieri);
    document.addEventListener(appEvents.gotoPensiero, gotoPensiero);

    return t;
}());

