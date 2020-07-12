export default function functionName() 
{
var root = document.createElement('div')
var a1 = document.createElement('button')
a1.style.color='white'
a1.style.fontWeight='bold'
a1.style.backgroundColor='rgb(0,0,128)'
a1.style.width='250px'
a1.style.borderRadius='25px'
a1.style.margin='15px'
a1.className= 'accordion active'
var textNode_9 = document.createTextNode('Project')
a1.append(textNode_9)
var panelPrj = document.createElement('div')

root.appendChild(a1)

panelPrj.style.display='block'
panelPrj.style.maxHeight='400px'
panelPrj.style.overflow='auto'
panelPrj.style.borderRadius='25px'
panelPrj.style.margin='15px'
panelPrj.className= 'panel'

root.appendChild(panelPrj)

var acc = []

acc.push(a1)

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

root.panelPrj = panelPrj

document.json('files', {folder: 'default'}).then(data=>{
    data.forEach(v=>{
      var item = document.createElement('h5')
      item.innerHTML = v
      item.style.cursor = 'pointer'
      item.onclick = ev => {
        document.eventManager('showFile', {fileName: v, folder: 'default'})
      }
      panelPrj.append(item)
    })
})

/* fetch('/files', {
  method: 'POST',
  headers: {'Content-Type':'application/json'},
  body: JSON.stringify({folder: 'default'})
}).then(res=>{
  return res.json()
}).then(data => {
  data.forEach(v=>{
    var item = document.createElement('h5')
    item.innerHTML = v
    item.style.cursor = 'pointer'
    item.onclick = ev => {
      document.eventManager('showFile', {fileName: v, folder: 'default'})
    }
    panelPrj.append(item)
  })
}) */

return root
}
