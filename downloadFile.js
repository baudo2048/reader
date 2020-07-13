export default function functionName() 
{
var root = document.createElement('div')
var h1_1 = document.createElement('h1')
h1_1.append(document.createTextNode( 'How to create a file and generate a download with ux lang'))
var a_2 = document.createElement('a')
a_2.append(document.createTextNode( 'click to download'))
a_2.href= 'data:text/plain;charset=utf-8,Hello content file... //encodeURIComponent(text)'
a_2.download= 'sampleFileNameToDownload.txt'

root.appendChild(h1_1)


root.appendChild(a_2)



return root
}
