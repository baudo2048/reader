export default function functionName() 
{
var root = document.createElement('div')
var a1 = document.createElement('button')
a1.style.color='white'
a1.style.fontWeight='bold'
a1.style.backgroundColor='rgb(0,0,128)'
a1.style.width='250px'
a1.className= 'accordion active'
var textNode_7 = document.createTextNode('Project')
a1.append(textNode_7)
var panelPrj = document.createElement('div')

root.appendChild(a1)

panelPrj.style.display='block'
panelPrj.style.maxHeight='500px'
panelPrj.style.overflow='auto'
panelPrj.className= 'panel'
var c = document.createElement('div')
c.style.backgroundColor='white'
c.style.flexGrow='1'
var h1_16 = document.createElement('h1')
h1_16.append(document.createTextNode( 'Frequently used'))
var div_17 = document.createElement('div')
div_17.style.display='flex'
div_17.style.flexDirection='column'
div_17.className= 'pure-form pure-form-aligned'
var backgroundColor = document.createElement('input')
backgroundColor.style.width='100%'
backgroundColor.type= 'color'
var h1_24 = document.createElement('h1')
h1_24.append(document.createTextNode( 'TEXT'))

div_17.appendChild(backgroundColor)


c.appendChild(h1_16)


c.appendChild(div_17)

var div_25 = document.createElement('div')
div_25.style.display='flex'
div_25.style.flexDirection='column'
div_25.className= 'pure-form pure-form-aligned'
var fontFamily = document.createElement('select')
fontFamily.style.width='100%'
fontFamily.className= 'pure-input-1-2'
var option_32 = document.createElement('option')
option_32.append(document.createTextNode( 'Arial'))
var option_33 = document.createElement('option')
option_33.append(document.createTextNode( 'Comic Sans MS'))
var option_34 = document.createElement('option')
option_34.append(document.createTextNode( 'Courier New'))
var option_35 = document.createElement('option')
option_35.append(document.createTextNode( 'Impact'))
var option_36 = document.createElement('option')
option_36.append(document.createTextNode( 'sans-serif'))
var option_37 = document.createElement('option')
option_37.append(document.createTextNode( 'Times New Roman'))
var fontSize = document.createElement('select')

fontFamily.appendChild(option_32)


fontFamily.appendChild(option_33)


fontFamily.appendChild(option_34)


fontFamily.appendChild(option_35)


fontFamily.appendChild(option_36)


fontFamily.appendChild(option_37)

fontSize.style.width='100%'
fontSize.className= 'pure-input-1-2'
var option_41 = document.createElement('option')
option_41.append(document.createTextNode( '8px'))
var option_42 = document.createElement('option')
option_42.append(document.createTextNode( '10px'))
var option_43 = document.createElement('option')
option_43.append(document.createTextNode( '12px'))
var option_44 = document.createElement('option')
option_44.append(document.createTextNode( '14px'))
var option_45 = document.createElement('option')
option_45.append(document.createTextNode( '16px'))
var option_46 = document.createElement('option')
option_46.append(document.createTextNode( '18px'))
var option_47 = document.createElement('option')
option_47.append(document.createTextNode( '20px'))
var option_48 = document.createElement('option')
option_48.append(document.createTextNode( '24px'))
var option_49 = document.createElement('option')
option_49.append(document.createTextNode( '36px'))
var option_50 = document.createElement('option')
option_50.append(document.createTextNode( '48px'))
var option_51 = document.createElement('option')
option_51.append(document.createTextNode( '72px'))
var color = document.createElement('input')

fontSize.appendChild(option_41)


fontSize.appendChild(option_42)


fontSize.appendChild(option_43)


fontSize.appendChild(option_44)


fontSize.appendChild(option_45)


fontSize.appendChild(option_46)


fontSize.appendChild(option_47)


fontSize.appendChild(option_48)


fontSize.appendChild(option_49)


fontSize.appendChild(option_50)


fontSize.appendChild(option_51)

color.style.width='100%'
color.type= 'color'
var textAlign = document.createElement('select')

div_25.appendChild(fontFamily)


div_25.appendChild(fontSize)


div_25.appendChild(color)

textAlign.style.width='100%'
textAlign.className= 'pure-input-1-2'
var option_58 = document.createElement('option')
option_58.append(document.createTextNode( 'center'))
var option_59 = document.createElement('option')
option_59.append(document.createTextNode( 'left'))
var option_60 = document.createElement('option')
option_60.append(document.createTextNode( 'right'))
var option_61 = document.createElement('option')
option_61.append(document.createTextNode( 'justify'))
var option_62 = document.createElement('option')
option_62.append(document.createTextNode( 'start'))
var h1_63 = document.createElement('h1')
h1_63.append(document.createTextNode( 'BUTTON'))

textAlign.appendChild(option_58)


textAlign.appendChild(option_59)


textAlign.appendChild(option_60)


textAlign.appendChild(option_61)


textAlign.appendChild(option_62)


div_25.appendChild(textAlign)

var div_64 = document.createElement('div')
div_64.className= 'pure-form pure-form-aligned'
var select_66 = document.createElement('select')
select_66.className= 'pure-input-1-2'
var option_68 = document.createElement('option')
var button_69 = document.createElement('button')
button_69.append(document.createTextNode( 'blue'))
button_69.style.backgroundColor='blue'
var option_71 = document.createElement('option')

option_68.appendChild(button_69)


select_66.appendChild(option_68)

var button_72 = document.createElement('button')
button_72.append(document.createTextNode( 'green'))
button_72.style.backgroundColor='green'
var h1_74 = document.createElement('h1')
h1_74.append(document.createTextNode( 'FLEX'))

option_71.appendChild(button_72)


select_66.appendChild(option_71)


div_64.appendChild(select_66)


c.appendChild(h1_24)


c.appendChild(div_25)


c.appendChild(h1_63)


c.appendChild(div_64)

var div_75 = document.createElement('div')
div_75.style.display='flex'
div_75.style.flexDirection='column'
div_75.className= 'pure-form pure-form-aligned'
var isFlexbox = document.createElement('input')
isFlexbox.type= 'checkbox'
var flexDirection = document.createElement('select')

div_75.appendChild(isFlexbox)

var option_82 = document.createElement('option')
option_82.append(document.createTextNode( 'row'))
var option_83 = document.createElement('option')
option_83.append(document.createTextNode( 'column'))
var h1_84 = document.createElement('h1')
h1_84.append(document.createTextNode( 'GRID'))

flexDirection.appendChild(option_82)


flexDirection.appendChild(option_83)


div_75.appendChild(flexDirection)

var div_85 = document.createElement('div')
div_85.className= 'pure-form pure-form-aligned'
var select_87 = document.createElement('select')
select_87.className= 'pure-input-1-2'
var option_89 = document.createElement('option')
var button_90 = document.createElement('button')
button_90.append(document.createTextNode( 'blue'))
button_90.style.backgroundColor='blue'
var option_92 = document.createElement('option')

option_89.appendChild(button_90)


select_87.appendChild(option_89)

var button_93 = document.createElement('button')
button_93.append(document.createTextNode( 'green'))
button_93.style.backgroundColor='green'
var h1_95 = document.createElement('h1')
h1_95.append(document.createTextNode( 'BOX'))

option_92.appendChild(button_93)


select_87.appendChild(option_92)


div_85.appendChild(select_87)


c.appendChild(h1_74)


c.appendChild(div_75)


c.appendChild(h1_84)


c.appendChild(div_85)

var div_96 = document.createElement('div')
div_96.style.display='flex'
div_96.style.flexDirection='column'
div_96.className= 'pure-form pure-form-aligned'
var width = document.createElement('input')
width.style.width='100%'
width.type= 'text'
var height = document.createElement('input')

div_96.appendChild(width)

height.style.width='100%'
height.type= 'text'

div_96.appendChild(height)


c.appendChild(h1_95)


c.appendChild(div_96)


panelPrj.appendChild(c)


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
