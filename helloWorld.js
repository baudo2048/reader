export default function functionName() 
{
var root = document.createElement('div')
root.append(document.createTextNode( 'Hello World CSS'))
root.style.width='100%'
root.varName= 'root'
var p_3 = document.createElement('p')
p_3.append(document.createTextNode( 'e1'))
var p_4 = document.createElement('p')
p_4.append(document.createTextNode( 'e2'))

root.appendChild(p_3)


root.appendChild(p_4)

root.onclick = ev => {alert('done')}
root.style.backgroundColor = 'green'



root.style.backgroundColor = '#ff8080'
return root
}
