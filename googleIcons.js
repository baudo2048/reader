export default function functionName() 
{
var root = document.createElement('div')
root.style.backgroundColor='black'
var i_2 = document.createElement('i')
i_2.append(document.createTextNode( 'face'))
i_2.className= 'material-icons md-48'
var span_4 = document.createElement('span')
span_4.append(document.createTextNode( 'code'))

root.appendChild(i_2)

span_4.className= 'material-icons md-48 white'
var img_6 = document.createElement('img')

root.appendChild(span_4)

img_6.src= './img/baseline_code_white_18dp.png'

root.appendChild(img_6)



return root
}
