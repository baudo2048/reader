export default function functionName() 
{
var root = document.createElement('div')
root.style.display='flex'
root.style.flexDirection='column'
root.style.height='640px'
root.style.width='360px'
var header = document.createElement('div')
header.style.display='flex'
header.style.justifyContent='flex-end'
var div_8 = document.createElement('div')
div_8.style.display='flex'
div_8.style.justifyContent='center'
div_8.style.alignContent='center'
div_8.style.borderRadius='50%'
div_8.style.width='36px'
div_8.style.height='36px'
div_8.style.textAlign='center'
var coins = document.createElement('h4')
coins.append(document.createTextNode( '1.000'))
var imgCoins = document.createElement('img')

div_8.appendChild(coins)

imgCoins.style.width='36px'
imgCoins.style.height='36px'
imgCoins.src= './img/coins.png'
var content = document.createElement('div')

header.appendChild(div_8)


header.appendChild(imgCoins)


root.appendChild(header)

content.style.position='relative'
content.style.textAlign='center'
var h1hello = document.createElement('h1')
h1hello.append(document.createTextNode( 'Ciao Kate'))
var imgSacco = document.createElement('img')
imgSacco.style.width='60px'
imgSacco.style.display='none'
imgSacco.src= './img/sacco.png'
imgSacco.className= 'dealWithIt'
var imgHeart = document.createElement('img')

content.appendChild(h1hello)


content.appendChild(imgSacco)

imgHeart.style.display='none'
imgHeart.src= './img/heart.gif'
var par1 = document.createElement('h5')
par1.append(document.createTextNode( 'Clicca sul sacchetto delle monetine'))

content.appendChild(imgHeart)

par1.style.display='none'
var br_35 = document.createElement('br')

content.appendChild(par1)

var goFirstPage = document.createElement('button')
goFirstPage.append(document.createTextNode( 'Start'))
goFirstPage.style.display='none'
goFirstPage.className= 'bttn-unite bttn-md'

content.appendChild(br_35)


content.appendChild(goFirstPage)


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
    h1hello.innerHTML = 'Welcome back!'
    h1hello.className = 'blazingStar'
    for(var i=1000;i<=2500;i++){
        coins.innerHTML = i
    }


    imgHeart.style.display = 'initial'

    coins.className = 'pulse'
    imgCoins.className = 'pulse'
    goFirstPage.style.display = 'initial'
}

var slideCount = 0
goFirstPage.onclick = ev => {
    content.innerHTML = ''

    slideCount++
    content.style.textAlign = 'left'
    import('./post00'+slideCount+'.js').then(module => {
        content.append(module.default())
    })
}

return root
}
