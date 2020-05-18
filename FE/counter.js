// REGISTERED EVENT
// activePensiero

var counter = (function(){
    var d = fdiv(20,document.body.clientHeight-45,150,45,0,'black');
    d.style.color = 'white';
    d.innerHTML = '0 di 0';

    function setCounter(e){
        counter.innerHTML = e.detail.activePensiero + ' di ' + e.detail.totalPensiero;
    }

    document.addEventListener(appEvents.counterPensieri, setCounter);

    return d;
}());