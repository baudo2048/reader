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