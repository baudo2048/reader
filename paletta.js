import w_ from './window.js'
export default function functionName() 
{
var root = document.createElement('div')
var w = w_()
w.style.overflow='auto'
var c = document.createElement('div')
c.style.backgroundColor='white'
c.style.flexGrow='1'
var h1_6 = document.createElement('h1')
h1_6.append(document.createTextNode( 'Frequently used'))
var div_7 = document.createElement('div')
div_7.style.display='flex'
div_7.style.flexDirection='column'
div_7.className= 'pure-form pure-form-aligned'
var backgroundColor = document.createElement('input')
backgroundColor.style.width='100%'
backgroundColor.type= 'color'
var h1_14 = document.createElement('h1')
h1_14.append(document.createTextNode( 'TEXT'))

div_7.appendChild(backgroundColor)


c.appendChild(h1_6)


c.appendChild(div_7)

var div_15 = document.createElement('div')
div_15.style.display='flex'
div_15.style.flexDirection='column'
div_15.className= 'pure-form pure-form-aligned'
var fontFamily = document.createElement('select')
fontFamily.style.width='100%'
fontFamily.className= 'pure-input-1-2'
var option_22 = document.createElement('option')
option_22.append(document.createTextNode( 'Arial'))
var option_23 = document.createElement('option')
option_23.append(document.createTextNode( 'Comic Sans MS'))
var option_24 = document.createElement('option')
option_24.append(document.createTextNode( 'Courier New'))
var option_25 = document.createElement('option')
option_25.append(document.createTextNode( 'Impact'))
var option_26 = document.createElement('option')
option_26.append(document.createTextNode( 'sans-serif'))
var option_27 = document.createElement('option')
option_27.append(document.createTextNode( 'Times New Roman'))
var fontSize = document.createElement('select')

fontFamily.appendChild(option_22)


fontFamily.appendChild(option_23)


fontFamily.appendChild(option_24)


fontFamily.appendChild(option_25)


fontFamily.appendChild(option_26)


fontFamily.appendChild(option_27)

fontSize.style.width='100%'
fontSize.className= 'pure-input-1-2'
var option_31 = document.createElement('option')
option_31.append(document.createTextNode( '8px'))
var option_32 = document.createElement('option')
option_32.append(document.createTextNode( '10px'))
var option_33 = document.createElement('option')
option_33.append(document.createTextNode( '12px'))
var option_34 = document.createElement('option')
option_34.append(document.createTextNode( '14px'))
var option_35 = document.createElement('option')
option_35.append(document.createTextNode( '16px'))
var option_36 = document.createElement('option')
option_36.append(document.createTextNode( '18px'))
var option_37 = document.createElement('option')
option_37.append(document.createTextNode( '20px'))
var option_38 = document.createElement('option')
option_38.append(document.createTextNode( '24px'))
var option_39 = document.createElement('option')
option_39.append(document.createTextNode( '36px'))
var option_40 = document.createElement('option')
option_40.append(document.createTextNode( '48px'))
var option_41 = document.createElement('option')
option_41.append(document.createTextNode( '72px'))
var color = document.createElement('input')

fontSize.appendChild(option_31)


fontSize.appendChild(option_32)


fontSize.appendChild(option_33)


fontSize.appendChild(option_34)


fontSize.appendChild(option_35)


fontSize.appendChild(option_36)


fontSize.appendChild(option_37)


fontSize.appendChild(option_38)


fontSize.appendChild(option_39)


fontSize.appendChild(option_40)


fontSize.appendChild(option_41)

color.style.width='100%'
color.type= 'color'
var textAlign = document.createElement('select')

div_15.appendChild(fontFamily)


div_15.appendChild(fontSize)


div_15.appendChild(color)

textAlign.style.width='100%'
textAlign.className= 'pure-input-1-2'
var option_48 = document.createElement('option')
option_48.append(document.createTextNode( 'center'))
var option_49 = document.createElement('option')
option_49.append(document.createTextNode( 'left'))
var option_50 = document.createElement('option')
option_50.append(document.createTextNode( 'right'))
var option_51 = document.createElement('option')
option_51.append(document.createTextNode( 'justify'))
var option_52 = document.createElement('option')
option_52.append(document.createTextNode( 'start'))
var fontWeight = document.createElement('select')

textAlign.appendChild(option_48)


textAlign.appendChild(option_49)


textAlign.appendChild(option_50)


textAlign.appendChild(option_51)


textAlign.appendChild(option_52)

fontWeight.style.width='100%'
fontWeight.className= 'pure-input-1-2'
var option_56 = document.createElement('option')
option_56.append(document.createTextNode( 'normal'))
var option_57 = document.createElement('option')
option_57.append(document.createTextNode( 'bold'))
var option_58 = document.createElement('option')
option_58.append(document.createTextNode( 'bolder'))
var option_59 = document.createElement('option')
option_59.append(document.createTextNode( 'lighter'))
var option_60 = document.createElement('option')
option_60.append(document.createTextNode( 'initial'))
var option_61 = document.createElement('option')
option_61.append(document.createTextNode( 'inherit'))
var fontStyle = document.createElement('select')

fontWeight.appendChild(option_56)


fontWeight.appendChild(option_57)


fontWeight.appendChild(option_58)


fontWeight.appendChild(option_59)


fontWeight.appendChild(option_60)


fontWeight.appendChild(option_61)

fontStyle.style.width='100%'
fontStyle.className= 'pure-input-1-2'
var option_65 = document.createElement('option')
option_65.append(document.createTextNode( 'normal'))
var option_66 = document.createElement('option')
option_66.append(document.createTextNode( 'italic'))
var option_67 = document.createElement('option')
option_67.append(document.createTextNode( 'oblique'))
var option_68 = document.createElement('option')
option_68.append(document.createTextNode( 'initial'))
var option_69 = document.createElement('option')
option_69.append(document.createTextNode( 'inherit'))
var h1_70 = document.createElement('h1')
h1_70.append(document.createTextNode( 'BUTTON'))

fontStyle.appendChild(option_65)


fontStyle.appendChild(option_66)


fontStyle.appendChild(option_67)


fontStyle.appendChild(option_68)


fontStyle.appendChild(option_69)


div_15.appendChild(textAlign)


div_15.appendChild(fontWeight)


div_15.appendChild(fontStyle)

var div_71 = document.createElement('div')
div_71.className= 'pure-form pure-form-aligned'
var select_73 = document.createElement('select')
select_73.className= 'pure-input-1-2'
var option_75 = document.createElement('option')
var button_76 = document.createElement('button')
button_76.append(document.createTextNode( 'blue'))
button_76.style.backgroundColor='blue'
var option_78 = document.createElement('option')

option_75.appendChild(button_76)


select_73.appendChild(option_75)

var button_79 = document.createElement('button')
button_79.append(document.createTextNode( 'green'))
button_79.style.backgroundColor='green'
var h1_81 = document.createElement('h1')
h1_81.append(document.createTextNode( 'FLEX'))

option_78.appendChild(button_79)


select_73.appendChild(option_78)


div_71.appendChild(select_73)


c.appendChild(h1_14)


c.appendChild(div_15)


c.appendChild(h1_70)


c.appendChild(div_71)

var div_82 = document.createElement('div')
div_82.style.display='flex'
div_82.style.flexDirection='column'
div_82.className= 'pure-form pure-form-aligned'
var isFlexbox = document.createElement('input')
isFlexbox.type= 'checkbox'
var flexDirection = document.createElement('select')

div_82.appendChild(isFlexbox)

var option_89 = document.createElement('option')
option_89.append(document.createTextNode( 'row'))
var option_90 = document.createElement('option')
option_90.append(document.createTextNode( 'column'))
var h1_91 = document.createElement('h1')
h1_91.append(document.createTextNode( 'GRID'))

flexDirection.appendChild(option_89)


flexDirection.appendChild(option_90)


div_82.appendChild(flexDirection)

var div_92 = document.createElement('div')
div_92.className= 'pure-form pure-form-aligned'
var select_94 = document.createElement('select')
select_94.className= 'pure-input-1-2'
var option_96 = document.createElement('option')
var button_97 = document.createElement('button')
button_97.append(document.createTextNode( 'blue'))
button_97.style.backgroundColor='blue'
var option_99 = document.createElement('option')

option_96.appendChild(button_97)


select_94.appendChild(option_96)

var button_100 = document.createElement('button')
button_100.append(document.createTextNode( 'green'))
button_100.style.backgroundColor='green'
var h1_102 = document.createElement('h1')
h1_102.append(document.createTextNode( 'BOX'))

option_99.appendChild(button_100)


select_94.appendChild(option_99)


div_92.appendChild(select_94)


c.appendChild(h1_81)


c.appendChild(div_82)


c.appendChild(h1_91)


c.appendChild(div_92)

var div_103 = document.createElement('div')
div_103.style.display='flex'
div_103.style.flexDirection='column'
div_103.className= 'pure-form pure-form-aligned'
var width = document.createElement('input')
width.style.width='100%'
width.type= 'text'
var height = document.createElement('input')

div_103.appendChild(width)

height.style.width='100%'
height.type= 'text'

div_103.appendChild(height)


c.appendChild(h1_102)


c.appendChild(div_103)


w.appendChild(c)


root.appendChild(w)

// RIUTILIZZO WINDOW.UX
w.titleName.innerHTML = 'Paletta'
w.contentArea.append(c)

var domToStyle

document.register('paletta', ev => {
    domToStyle = ev.detail.dom

    w.titleName.innerHTML = 'Paletta: ' + domToStyle.tagName

    var css = window.getComputedStyle(domToStyle, null) 

    //background-color
    backgroundColor.value = css.getPropertyValue("background-color")
    backgroundColor.onchange= ev => {
        domToStyle.style.backgroundColor= backgroundColor.value
        // scrivo su windowDev.textareaCode - tramite evento si sa
        document.em('windowDev.textareaCode.append', {varName:domToStyle.varName, propertyName:'backgroundColor', propertyValue:backgroundColor.value})
    }     

    // font-family
    fontFamily.value = css.getPropertyValue("font-family")
    fontFamily.onchange = ev => {
        domToStyle.style.fontFamily = fontFamily.value
    }

    //font-size
    fontSize.value = css.getPropertyValue("font-size")
    fontSize.onchange = ev => {
        domToStyle.style.fontSize = fontSize.value
    }

    //text-align
    textAlign.value = css.getPropertyValue("text-align")
    textAlign.onchange = ev => {
        domToStyle.style.textAlign = textAlign.value
    }

    //font-weight
    fontWeight.value = css.getPropertyValue("font-weight")
    fontWeight.onchange = ev => {
        domToStyle.style.fontWeight= fontWeight.value
    }

    //font-style
    fontStyle.value = css.getPropertyValue("font-style")
    fontStyle.onchange = ev => {
        domToStyle.style.fontStyle= fontStyle.value
    }

    //color
    color.value = css.getPropertyValue("color")
    color.onchange = ev => {
        domToStyle.style.color= color.value
    }

    //flexbox
    isFlexbox.checked = css.getPropertyValue("display")=='flex' ? true : false
    isFlexbox.onclick = ev => {
        domToStyle.style.display = isFlexbox.checked==true ? 'flex' : 'initial'
    }    

    //flex-direction
    flexDirection.value = css.getPropertyValue("flex-direction")
    flexDirection.onclick = ev => {
        domToStyle.style.flexDirection= flexDirection.value
    } 

    //width
    width.value = css.getPropertyValue("width")
    width.onchange = ev => {
        domToStyle.style.width= width.value
    }

    //height
    height.value = css.getPropertyValue("height")
    height.onchange = ev => {
        domToStyle.style.height= height.value
    }

    Array.from(css).forEach(v => {
        console.log(v + ' - ' + css.getPropertyValue(v))
    })

})

return root
}
