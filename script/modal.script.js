root.contentArea = contentArea
root.title = title
root.annullaBtn = annullaBtn
root.continuaBtn = continuaBtn

root.style.display = 'none'

root.createModal = (t, c, btn1) => {
    contentArea = c
    title = t
    continuaBtn = btn1

    return root
}

annullaBtn.onclick = ev => {
    root.style.display ='none'
}

