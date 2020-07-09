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