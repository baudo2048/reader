export default function functionName() 
{
var root = document.createElement('div')
root.style.display='flex'
root.style.flexDirection='column'
root.style.height='640px'
root.style.width='360px'
root.style.border='1px solid blue'
var header = document.createElement('div')
header.style.display='flex'
header.style.justifyContent='flex-end'
var div_9 = document.createElement('div')
div_9.style.display='flex'
div_9.style.justifyContent='center'
div_9.style.alignContent='center'
div_9.style.borderRadius='50%'
div_9.style.width='36px'
div_9.style.height='36px'
div_9.style.textAlign='center'
var coins = document.createElement('h4')
coins.append(document.createTextNode( '1.000'))
var img_18 = document.createElement('img')

div_9.appendChild(coins)

img_18.style.width='36px'
img_18.style.height='36px'
img_18.src= './img/coins.png'
var content = document.createElement('div')

header.appendChild(div_9)


header.appendChild(img_18)


root.appendChild(header)

content.style.position='relative'
content.style.textAlign='center'
var h1hello = document.createElement('h1')
h1hello.append(document.createTextNode( 'Ciao Kate'))
var imgSacco = document.createElement('img')
imgSacco.style.width='60px'
imgSacco.style.display='none'
imgSacco.src= './img/sacco.png'
var par1 = document.createElement('h5')
par1.append(document.createTextNode( 'Clicca sul sacchetto delle monetine'))

content.appendChild(h1hello)


content.appendChild(imgSacco)

par1.style.display='none'

content.appendChild(par1)


root.appendChild(content)

var contentAnimation = content.animate([
  {top: '50px'},
  {top: '100px'},
  {top: '150px'}
], {
    duration: 750,
    iterations: 1,
    fill: 'forwards',
    easing: 'ease-in'
});


contentAnimation.onfinish = ev => {
    imgSacco.style.display = 'initial'


    par1.style.display = 'block'

}


imgSacco.onclick = ev => {
    par1.style.display = 'none'
    imgSacco.style.display = 'none'
    h1hello.innerHTML = 'Torna domani, continua a giocare, accumula monetine'

    for(var i=1000;i<=2500;i++){
        coins.innerHTML = i


    }
}
return root
}
