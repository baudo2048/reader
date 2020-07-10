export default function functionName() 
{
var root = document.createElement('div')
var h1_1 = document.createElement('h1')
h1_1.append(document.createTextNode( 'CSS LIBRARIES'))
var h2_2 = document.createElement('h2')
h2_2.append(document.createTextNode( 'BUTTONS'))
var ul_3 = document.createElement('ul')
var li_4 = document.createElement('li')
var a_5 = document.createElement('a')
a_5.append(document.createTextNode( 'recensione'))
a_5.href= 'https://speckyboy.com/css-button-libraries/'
var li_7 = document.createElement('li')

li_4.appendChild(a_5)


ul_3.appendChild(li_4)

var a_8 = document.createElement('a')
a_8.append(document.createTextNode( 'bttn'))
a_8.href= 'https://bttn.surge.sh/'
var h2_10 = document.createElement('h2')
h2_10.append(document.createTextNode( 'ANIMATIONS'))

li_7.appendChild(a_8)


ul_3.appendChild(li_7)


root.appendChild(h1_1)


root.appendChild(h2_2)


root.appendChild(ul_3)

var ul_11 = document.createElement('ul')
var li_12 = document.createElement('li')
var a_13 = document.createElement('a')
a_13.append(document.createTextNode( 'whoa'))
a_13.href= 'https://www.joerezendes.com/projects/Woah.css/'
var h2_15 = document.createElement('h2')
h2_15.append(document.createTextNode( 'GRADIENTS'))

li_12.appendChild(a_13)


ul_11.appendChild(li_12)


root.appendChild(h2_10)


root.appendChild(ul_11)

var ul_16 = document.createElement('ul')
var li_17 = document.createElement('li')
var a_18 = document.createElement('a')
a_18.append(document.createTextNode( 'cssgradient.io'))
a_18.href= 'https://cssgradient.io/'

li_17.appendChild(a_18)


ul_16.appendChild(li_17)


root.appendChild(h2_15)


root.appendChild(ul_16)



return root
}
