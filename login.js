export default function functionName() 
{
var root = document.createElement('div')
var h1_1 = document.createElement('h1')
h1_1.append(document.createTextNode( 'LOGIN PAGE'))
var p_2 = document.createElement('p')
p_2.append(document.createTextNode( 'Coming soon'))
var input_3 = document.createElement('input')
input_3.type= 'text'
var input_5 = document.createElement('input')

root.appendChild(h1_1)


root.appendChild(p_2)


root.appendChild(input_3)

input_5.type= 'text'
var ctaLogin = document.createElement('button')
ctaLogin.append(document.createTextNode( 'Login'))

root.appendChild(input_5)

var ctaRegister = document.createElement('button')
ctaRegister.append(document.createTextNode( 'Register'))

root.appendChild(ctaLogin)


root.appendChild(ctaRegister)



return root
}
