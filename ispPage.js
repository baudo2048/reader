import ispHeader_3_ from './ispHeader.js'
export default function functionName() 
{
var root = document.createElement('div')
root.style.display='flex'
root.style.flexDirection='column'
var ispHeader_3 = ispHeader_3_()
var page = document.createElement('div')
page.style.display='flex'
page.style.flexDirection='column'
page.style.flexGrow='1'
page.style.alignItems='center'
var h1_9 = document.createElement('h1')
h1_9.append(document.createTextNode( 'Title'))
var p_10 = document.createElement('p')
p_10.append(document.createTextNode( ' lorem ipsum'))
var img_11 = document.createElement('img')
img_11.style.width='1000px'
img_11.style.height='700px'
img_11.src= './img/pmmap.png'

page.appendChild(h1_9)


page.appendChild(p_10)


page.appendChild(img_11)


root.appendChild(ispHeader_3)


root.appendChild(page)



return root
}
