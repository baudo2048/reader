import fdiv from '../lib/html.js';
import {register} from '../event/events.js';
import {appEvents, eventManager} from '../event/eventManager.js';

export default function indice() {
    var isDisplayed = false;
    var sommario = [
        {
            Title: 'Introduzione',
            Da: 1,
            A: 137,
            Score: 0,
            Pointer: 1
        },
        {
            Title: 'Prefazione alla seconda edizione',
            Da: 138,
            A: 306,
            Score: 0,
            Pointer: 1
        },
        {
            Title: 'Prefazione alla prima edizione',
            Da: 307,
            A: 402,
            Score: 0,
            Pointer: 1
        },
        {
            Title: 'Introduzione',
            Da: 403,
            A: 711,
            Score: 0,
            Pointer: 1
        }
    ];

    var div = fdiv(0,0,document.body.clientWidth,document.body.clientHeight,0,'black');
    div.style.color = 'white';
    div.style.visibility = 'hidden';

    var heading = document.createElement('h1');
    heading.innerHTML = 'Critica della ragion pura';

    heading.style.marginLeft = 'auto';
    heading.style.marginRight = 'auto';
    heading.style.width = '400px';

    var table = document.createElement('table');
    table.style.border = '1px solid black';
    table.style.padding = '30px';
    table.style.position = 'fixed';
    table.style.left = 0;
    table.style.right = 0;
    table.style.margin = '5% auto';
    table.style.width = '800px';
    
    var render = () => {
        
        var tr = document.createElement('tr');
        var th_title = document.createElement('th');
        var th_da = document.createElement('th');
        var th_a = document.createElement('th');
        var th_tot = document.createElement('th');
        var th_score = document.createElement('th');
        var th_pointer = document.createElement('th');

        th_title.innerHTML = 'Title';
        th_da.innerHTML = 'Da';
        th_a.innerHTML = 'A';
        th_tot.innerHTML = 'Tot';
        th_score.innerHTML = 'Score';
        th_pointer.innerHTML = 'Pointer';

        tr.append(th_title, th_da, th_a, th_tot,th_score,th_pointer);
        table.appendChild(tr);

        sommario.forEach( (v,i,a) => {            
            var tr = document.createElement('tr'); 
            var td_title = document.createElement('td'); td_title.style.padding = '30px';
            td_title.style.cursor = 'pointer';
            var td_da = document.createElement('td'); td_da.style.padding = '30px';
            var td_a = document.createElement('td'); td_a.style.padding = '30px';
            var td_tot = document.createElement('td'); td_tot.style.padding = '30px';
            var td_score = document.createElement('td'); td_score.style.padding = '30px';
            var td_pointer = document.createElement('td'); td_pointer.style.padding = '30px';

            td_title.innerHTML = v.Title;
            td_da.innerHTML = v.Da;
            td_a.innerHTML = v.A;
            td_tot.innerHTML = v.A - v.Da;
            td_score.innerHTML = v.Score;
            td_pointer.innerHTML = v.Pointer;

            td_title.onclick = (ev) => {
                isDisplayed = false;
                div.style.visibility = 'hidden';
                eventManager(appEvents.itemIndiceClicked, {numPensiero: v.Da});
            };

            tr.append(td_title, td_da, td_a, td_tot,td_score,td_pointer);
            table.appendChild(tr);
        });

        
    };

    render();
    div.append(heading, table);

    /** ************************** PUBLIC ****************************************** */
    function toggleIndice(ev){
        isDisplayed = !isDisplayed;
        if(isDisplayed){
            div.style.visibility='visible';
            //render();
        } else {
            div.style.visibility='hidden';
        }
    }
    function showIndice(ev){
        isDisplayed = true;
        div.style.visibility = 'visible';
    }
    function hideIndice(ev){
        isDisplayed = false;
        div.style.visibility = 'hidden';
    }

    register(appEvents.toggleIndice, toggleIndice);
    register(appEvents.showIndice, showIndice);
    register(appEvents.hideIndice, hideIndice);

    return div;
}