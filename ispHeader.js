export default function functionName() 
{
var ispHeaderRoot = document.createElement('div')
ispHeaderRoot.style.display='flex'
ispHeaderRoot.style.justifyContent='space-between'
ispHeaderRoot.style.backgroundColor='blue'
var div_4 = document.createElement('div')
var img_5 = document.createElement('img')
img_5.src= './img/logo-intesasanpaolo.png'
var div_7 = document.createElement('div')

div_4.appendChild(img_5)


ispHeaderRoot.appendChild(div_4)

var img_8 = document.createElement('img')
img_8.src= './img/tempio_grigio.png'

div_7.appendChild(img_8)


ispHeaderRoot.appendChild(div_7)



return ispHeaderRoot
}
