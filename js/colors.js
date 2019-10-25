// COLORS
let colorPicker = document.getElementById("color-picker");
let baseColors = document.getElementsByClassName("base-colors");
let shadeColorsContainer = document.createElement("div");
let h1currentColor = document.createElement("h2");
let shadeColorsTotal = 5;

shadeColorsContainer.classList.add("shade-colors-container");
h1currentColor.classList.add("current-color");

colorPicker.appendChild(shadeColorsContainer);
shadeColorsContainer.appendChild(h1currentColor);

for (let i = 0; i < shadeColorsTotal; i++) {
    let shadeColors = document.createElement("div");
    let shadeColorWeight = document.createElement("div");
    let colorCopiedMsg = document.createElement("div");
    let shadeColorHex = document.createElement("div");

    shadeColors.classList.add("shade-colors");
    shadeColorWeight.classList.add("shade-color-weight");
    colorCopiedMsg.classList.add("copy-message");
    shadeColorHex.classList.add("shade-color-hex");

    colorCopiedMsg.innerHTML = "Color copied!";

    shadeColorsContainer.appendChild(shadeColors);
    shadeColors.appendChild(shadeColorWeight);
    shadeColors.appendChild(colorCopiedMsg);
    shadeColors.appendChild(shadeColorHex);

}

let clShadeColors = document.getElementsByClassName("shade-colors");
let clShadeColorWeight = document.getElementsByClassName("shade-color-weight");
let clShadeColorHex = document.getElementsByClassName("shade-color-hex");

for (let i = 5; i < shadeColorsTotal; i++) {
    clShadeColorWeight[i].style.color = "#ddd";
    clShadeColorHex[i].style.color = "#ddd";
}

function activeColor() {
    let currentColor = this.getAttribute("data-color");

    for (let i = 0; i < baseColors.length; i++) {
        baseColors[i].classList.remove("activeColor");
    }

    if (this.classList.contains("activeColor") === false) {
        this.classList.add("activeColor");
    }

    if (this.classList.contains("activeColor")) {
        shadeColorsContainer.classList.add("collapsed");
    }

    switch (currentColor) {
        case "primary":
            h1currentColor.innerHTML = currentColor;
            h1currentColor.style.color = "#095AA2";

            clShadeColors[0].style.backgroundColor = "#4686BF";
            clShadeColorWeight[0].innerHTML = ".primary-1";
            clShadeColorHex[0].innerHTML = "#4686BF";

            clShadeColors[1].style.backgroundColor = "#2371B7";
            clShadeColorWeight[1].innerHTML = ".primary-2";
            clShadeColorHex[1].innerHTML = "#2371B7";

            clShadeColors[2].style.backgroundColor = "#095AA2";
            clShadeColorWeight[2].innerHTML = ".primary-0";
            clShadeColorHex[2].innerHTML = "#095AA2";

            clShadeColors[3].style.backgroundColor = "#074781";
            clShadeColorWeight[3].innerHTML = ".primary-3";
            clShadeColorHex[3].innerHTML = "#074781";

            clShadeColors[4].style.backgroundColor = "#043764";
            clShadeColorWeight[4].innerHTML = ".primary-4";
            clShadeColorHex[4].innerHTML = "#043764";

            break;

        case "warrning":
            h1currentColor.innerHTML = currentColor;
            h1currentColor.style.color = "#FA9200";

            clShadeColors[0].style.backgroundColor = "#FFB751";
            clShadeColorWeight[0].innerHTML = ".warrning-1";
            clShadeColorHex[0].innerHTML = "#FFB751";

            clShadeColors[1].style.backgroundColor = "#FFA320";
            clShadeColorWeight[1].innerHTML = ".warrning-2";
            clShadeColorHex[1].innerHTML = "#FFA320";

            clShadeColors[2].style.backgroundColor = "#FA9200";
            clShadeColorWeight[2].innerHTML = ".warrning-0";
            clShadeColorHex[2].innerHTML = "#FA9200";

            clShadeColors[3].style.backgroundColor = "#C77400";
            clShadeColorWeight[3].innerHTML = ".warrning-3";
            clShadeColorHex[3].innerHTML = "#C77400";

            clShadeColors[4].style.backgroundColor = "#9B5B00";
            clShadeColorWeight[4].innerHTML = ".warrning-4";
            clShadeColorHex[4].innerHTML = "#9B5B00";

            break;

        case "danger":
            h1currentColor.innerHTML = currentColor;
            h1currentColor.style.color = "#FA4E00";

            clShadeColors[0].style.backgroundColor = "#FF8751";
            clShadeColorWeight[0].innerHTML = "danger-1";
            clShadeColorHex[0].innerHTML = "#FF8751";

            clShadeColors[1].style.backgroundColor = "#FF6620";
            clShadeColorWeight[1].innerHTML = "danger-2";
            clShadeColorHex[1].innerHTML = "#FF6620";

            clShadeColors[2].style.backgroundColor = "#FA4E00";
            clShadeColorWeight[2].innerHTML = "danger-0";
            clShadeColorHex[2].innerHTML = "#FA4E00";

            clShadeColors[3].style.backgroundColor = "#C73E00";
            clShadeColorWeight[3].innerHTML = "danger-3";
            clShadeColorHex[3].innerHTML = "#C73E00";

            clShadeColors[4].style.backgroundColor = "#9B3000";
            clShadeColorWeight[4].innerHTML = "danger-4";
            clShadeColorHex[4].innerHTML = "#9B3000";

            break;

        case "success":
            h1currentColor.innerHTML = currentColor;
            h1currentColor.style.color = "#00A969";

            clShadeColors[0].style.backgroundColor = "#3EC491";
            clShadeColorWeight[0].innerHTML = "success-1";
            clShadeColorHex[0].innerHTML = "#3EC491";

            clShadeColors[1].style.backgroundColor = "#18BC7E";
            clShadeColorWeight[1].innerHTML = "success-2";
            clShadeColorHex[1].innerHTML = "#18BC7E";

            clShadeColors[2].style.backgroundColor = "#00A969";
            clShadeColorWeight[2].innerHTML = "success-0";
            clShadeColorHex[2].innerHTML = "#00A969";

            clShadeColors[3].style.backgroundColor = "#008654";
            clShadeColorWeight[3].innerHTML = "success-3";
            clShadeColorHex[3].innerHTML = "#008654";

            clShadeColors[4].style.backgroundColor = "#006941";
            clShadeColorWeight[4].innerHTML = "success-4";
            clShadeColorHex[4].innerHTML = "#006941";

            break;
    }

    for (let i = 0; i < clShadeColors.length; i++) {
        clShadeColors[i].children[1].classList.remove("show");
    }
}
for (let i = 0; i < baseColors.length; i++) {
    baseColors[i].addEventListener("click", activeColor);
}

// Klikom na boju, tekst postaje te boje
function copyToClipboard() {
    let colorTextArea = document.getElementById("color-textarea");
    let colorPickerTitle = document.getElementById("colorPickerTitle");
    let cShadeColorHex = this.children[2].textContent;

    colorPickerTitle.style.color = cShadeColorHex;


    colorTextArea.value = cShadeColorHex;
    colorTextArea.select();
    document.execCommand('Copy');

    for (let i = 0; i < clShadeColors.length; i++) {
        clShadeColors[i].children[1].classList.remove("show");
    }

    this.children[1].classList.toggle("show");
}
for (let i = 0; i < clShadeColors.length; i++) {
    clShadeColors[i].addEventListener("click", copyToClipboard);
}