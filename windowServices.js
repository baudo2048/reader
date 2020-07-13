import win_ from './window.js'
import windowServicesContent from './windowServicesContent.js'
export default function functionName() 
{
var root = document.createElement('DIV')
var win = win_()

root.appendChild(win)



win.contentArea.append(windowServicesContent())
win.title.innerHTML = 'Services'

return root
}
