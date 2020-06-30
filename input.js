export default function functionName() 
{
var root = document.createElement('div')
var label_1 = document.createElement('label')
label_1.for= 'avatar'
var textNode_3 = document.createTextNode('Choose a profile picture:')
label_1.append(textNode_3)
var input_4 = document.createElement('input')

root.appendChild(label_1)

input_4.type= 'file'
input_4.id= 'avatar'
input_4.name= 'avatar'

root.appendChild(input_4)


return root
}
