export default function functionName() 
{
var root = document.createElement('div')
var form_1 = document.createElement('form')
form_1.className= 'pure-form'
var strSearch = document.createElement('input')
strSearch.className= 'pure-input-rounded'
strSearch.type= 'text'

form_1.appendChild(strSearch)


root.appendChild(form_1)

strSearch.onkeyup = ev => {
    //Dall'accordion remove what doesn't match

    document.em('accordion.filterFiles', strSearch.value)
}

return root
}
