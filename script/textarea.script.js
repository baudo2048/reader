function getTokenType(t){  // t = string
	const sentinel = t.substr(0,1)
	if (sentinel == ".")
	return "attr"
	if (sentinel == "-")
		return "style"
	if (sentinel == "'")
		return "text"
	if (sentinel == "\\")
		return "include"
	return "elem"
}

function countTabs(l){
	const count = Math.floor(l.search(/\S|$/) / 4)
	return count
}



tCode.onkeydown = ev => {
    ev.preventDefault()

    var textNode = tCode.firstChild    
    var text = textNode.nodeValue

    var tabs = countTabs(text)
    var text = text.trim()   
    text = text.replace('<span style="color:blue">','')
    text = text.replace('</span>','')


    var initialLength = text.length

    var s = window.getSelection()
    var range = s.getRangeAt(0)
    var offset = range.startOffset

    // Prima di settare il testo partono gli if per capire se si tratta di
    // testo e numeri
    // spazio
    // tab, backspace, Delete, ...

    var r = document.createRange()
    r.collapse(true)
      
    switch(ev.key){
        case 'ArrowLeft':
            if(offset!=0) r.setStart(textNode, offset-1)
            break
        case 'ArrowRight':
            if(offset!=initialLength) r.setStart(textNode, offset+1)
            break
        case 'Backspace':
            text = text.substr(0,offset-1) + text.substring(offset,initialLength)
            textNode.nodeValue = text
            r.setStart(textNode, offset-1)  
            break
        case 'Delete':
            text = text.substr(0,offset) + text.substring(offset+1,initialLength)
            textNode.nodeValue = text
            r.setStart(textNode, offset)  
            break
        case 'Tab':

            break
        default:
            //row = row.substr(0,offset) + ev.key + row.substring(offset, initialLength)
            //tCode.innerHTML = row
            //r.setStart(tCode, offset+1)
            text = text.substr(0,offset) + ev.key + text.substring(offset,initialLength)
            textNode.nodeValue = text
            r.setStart(textNode, offset+1)  
            break
    }

    s.removeAllRanges();
    s.addRange(r);
    
}


tCode.onkeyup = ev => {
    ev.preventDefault()

    var tabs = countTabs(tCode.innerHTML)
    var row = tCode.innerHTML.trim()

    row = row.replace('<span style="color:blue">','')
    row = row.replace('</span>','')
    var tokens = row.split(' ')  
    if(getTokenType(tokens[0])=='elem'){
        tokens[0] = '<span style="color:blue">' + tokens[0] + '</span>'
    }

    tCode.innerHTML = ''
    for(var u=0;u<tabs*4;u++){
        tCode.innerHTML = tCode.innerHTML + ' '
    }

    tokens.forEach(a=>{
        tCode.innerHTML = tCode.innerHTML + a
    })

}
