var objSelected;

window.onload = function onLoad() {
    objSelected = document.getElementsByClassName("selected").item(0);

    elements = document.getElementsByClassName("pixel");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", paint)
    }

    let cores = ["black", "green", "red", "blue"];
    elements = document.getElementsByClassName("box");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = cores[i];
        elements[i].addEventListener("click", escolheCor)
    }
}

function escolheCor() {
    objSelected.classList.remove('selected');
    objSelected = this;
    objSelected.classList.add('selected');
}

function paint() {
    //this.innerHTML = "0";
    this.style.backgroundColor = objSelected.style.backgroundColor;
}