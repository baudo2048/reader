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