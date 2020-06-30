//import {table} from '../lib/html.js';

//var tableFirmatari = table([{nome:'rossi mario', cf:'RSAMRI76A45C345Y', ibiz:'SI', ndce:'NO', grafo:'NO', gruppo:'Gruppo A', peso:'50%'},{nome:'rossi mario', cf:'RSAMRI76A45C345Y', ibiz:'SI', ndce:'NO', grafo:'NO', gruppo:'Gruppo A', peso:'50%'}]);
//table1.append(tableFirmatari);


/********************************* PUBLIC ********************************************* */
root.blur = (ev) => {
	root.classList.add("blur");
}

root.unblur = (ev) => {
	root.classList.remove("blur");
}

document.register('elencoFirmatariBlur', root.blur)