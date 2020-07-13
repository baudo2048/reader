strSearch.onkeyup = ev => {
    //Dall'accordion remove what doesn't match

    document.em('accordion.filterFiles', strSearch.value)
}