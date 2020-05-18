//const grid = require('./lib/grid.js');



document.dispatchEvent(new CustomEvent(appEvents.setPensieri, {detail: {pensieri: book2}}));

document.body.appendChild(textArea);
document.body.appendChild(counter);

