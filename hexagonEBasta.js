export default function functionName() 
{
var root = document.createElement('div')
var dataArr = [{msName:'Microservice name', msDescription:'descrizione'},{msName:'Microservice name', msDescription:'descrizione'},{msName:'Microservice name', msDescription:'descrizione'}]

dataArr.forEach(v => {
    var div = document.createElement('div')
    div.style.width = '150px'
    div.style.height = '150px'
    div.style.backgroundColor = 'pink'

    var h1 = document.createElement('h1')
    h1.innerHTML = 'MicroserviceName'

    div.append(h1)

    var p = document.createElement('p')
    p.innerHTML = 'Descrizione microservizio'

    div.append(p)

    root.append(div)
})

return root
}
