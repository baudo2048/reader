export default function table1() {
var table1 = document.createElement('table');
table1.style.padding = '15px';
var heading = document.createElement('tr');
var th_3 = document.createElement('th');
var input_4 = document.createElement('input');
input_4.type = 'checkbox';
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
        td.innerHTML = v[key];
        row.appendChild(td);
    }
    root.appendChild(row);
});
return table1;}