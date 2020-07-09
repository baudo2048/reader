export default function functionName() 
{
var root = document.createElement('div')
var label_1 = document.createElement('label')
label_1.style.display='flex'
label_1.style.fontWeight='bold'
label_1.for= 'avatar'
var textNode_5 = document.createTextNode('Choose a profile picture:')
label_1.append(textNode_5)
var input_6 = document.createElement('input')

root.appendChild(label_1)

input_6.type= 'file'
input_6.id= 'avatar'
input_6.name= 'avatar'

root.appendChild(input_6)


return root
}
