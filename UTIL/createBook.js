var fs = require('fs');
var lib = require('./lib/library.js');

var text = fs.readFileSync('in.txt', 'utf-8');

function check(){
    for(i=0;i<200;i++){
        console.log(text.charAt(i) + ' ' + text.charCodeAt(i));
    }
}
check();

var book = `var book2 = [`;

var p = '';
for (i=0;i<text.length;i++){
    c = text.substr(i,1);
    if (text.charCodeAt(i)!==13 && text.charCodeAt(i)!==10 && text.charCodeAt!==65279){
        //console.log(p);
        if(text.charCodeAt(i)==171){
            p +='&rsquo;'
        } else if (text.charCodeAt(i)==232) {
            p += '&#232;';
        } else {
            p += c;
        }
        
    }

    //console.log(c);

    if (c==='.'){
        
        book += '`' + p + '`,';
        p='';
    }
}





book+= `]`;

lib.writeFile('book2.js', book);


