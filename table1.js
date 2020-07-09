export default function functionName() 
{
var table1 = document.createElement('table')
table1.style.padding='15px'
table1.style.backgroundColor='green'
var heading = document.createElement('tr')
var th_4 = document.createElement('th')
th_4.style.backgroundColor='purple'
var input_6 = document.createElement('input')
input_6.type= 'checkbox'

th_4.appendChild(input_6)


heading.appendChild(th_4)


table1.appendChild(heading)

var arr = [{nome:'rossi mario', cf:'RSAMRI76A45C345Y', ibiz:'SI', ndce:'NO', grafo:'NO', gruppo:'Gruppo A', peso:'50%'},{nome:'rossi mario', cf:'RSAMRI76A45C345Y', ibiz:'SI', ndce:'NO', grafo:'NO', gruppo:'Gruppo A', peso:'50%'}];

for (var key in arr[0]){
    var th = document.createElement('th');
    th.innerHTML = key;
    heading.appendChild(th);
}

arr.forEach( (v,i,a) => {
    var row = document.createElement('tr');


    var check = document.createElement('input');
    check.type = 'checkbox';
    var tdCheck = document.createElement('td');
    tdCheck.append(check);
    row.appendChild(tdCheck);

    for (var key in v){
        var td = document.createElement('th');
        td.onmouseover = ev => {
        td.style.backgroundColor = 'pink'
    }
        td.innerHTML = v[key];
        row.appendChild(td);
    }
    table1.appendChild(row);
});


table1.style.backgroundColor = 'red'
return table1
}
