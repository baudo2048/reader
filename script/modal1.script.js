modal1AnnullaBtn.onclick = (ev) => {
    document.eventManager('modal1AnnullaBtnClicked');
};

function showModal1(ev){
    modal1Root.style.visibility = 'visible';
}

function hideModal1(ev){
    modal1Root.style.visibility = 'hidden';
}

document.registerDefault(showModal1);
document.registerDefault(hideModal1);

