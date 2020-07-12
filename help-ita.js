export default function functionName() 
{
var root = document.createElement('div')
var h1_1 = document.createElement('h1')
h1_1.append(document.createTextNode( 'Guida Rapida'))
var P_2 = document.createElement('P')
P_2.append(document.createTextNode( 'Ti piacerebbe creare siti web accattivanti per laptop e mobile devices? Allora segui questa guida rapida. Impara un linguaggio semplice e intuitivo per creare applicazioni in maniera rapida.'))

root.appendChild(h1_1)


root.appendChild(P_2)



return root
}
