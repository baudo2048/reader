export default function functionName() 
{
var root = document.createElement('div')
var h1_1 = document.createElement('h1')
h1_1.append(document.createTextNode( 'Lezione 1'))
var h3_2 = document.createElement('h3')
h3_2.append(document.createTextNode( 'circa 1 min.'))
var p_3 = document.createElement('p')
p_3.append(document.createTextNode( 'Leggi la lezione del giorno, impara cose nuove, prova gli esercizi proposti, condividi con altri quanto hai imparato e alla fine di ogni lezione ricordati di cliccare sul sacchetto delle monete. I gettoni sono un indicatore di quanto hai imparato. Più monete più ti sei impegnato ed applicato.'))
p_3.style.textAlign='justify'
var br_5 = document.createElement('br')

root.appendChild(h1_1)


root.appendChild(h3_2)


root.appendChild(p_3)

var br_6 = document.createElement('br')
var imgSacco = document.createElement('img')
imgSacco.style.width='60px'
imgSacco.src= './img/sacco.png'
imgSacco.className= 'dealWithIt'

root.appendChild(br_5)


root.appendChild(br_6)


root.appendChild(imgSacco)

imgSacco.onclick = ev => {
    for(var i=2500;i<=2750;i++){
        coins.innerHTML = i
    }
}
return root
}
