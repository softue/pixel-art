var objSelected;

window.onload = function () {
    //objSelected = document.getElementsByClassName("selected").item(0);
    //objSelected = document.querySelectorAll(".selected").item(0);
    objSelected = document.querySelector(".selected");

    document.querySelectorAll(".pixel").forEach(item => {
        item.addEventListener("click", pintarPixel);
    });

    let cores = ["white", randomColor(), randomColor(), randomColor()];
    elements = document.querySelectorAll(".box");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = cores[i];
        elements[i].addEventListener("click", escolherCor)
    }
}

function randomColor() {
    return "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
}

function escolherCor() {
    objSelected.classList.remove('selected');
    objSelected = this;
    objSelected.classList.add('selected');
}

function pintarPixel() {
    this.style.backgroundColor = objSelected.style.backgroundColor;
}