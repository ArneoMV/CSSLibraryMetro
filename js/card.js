// Drop-down content -> card
// jedan drop-down, jedna funkcija
function show_hide1() {
    var click = document.getElementById("drop-content1");
    if (click.style.display === "none") {
        click.style.display = "block";
    } else {
        click.style.display = "none";
    }
}

function show_hide2() {
    var click = document.getElementById("drop-content2");
    if (click.style.display === "none") {
        click.style.display = "block";
    } else {
        click.style.display = "none";
    }
}

function show_hide3() {
    var click = document.getElementById("drop-content3");
    if (click.style.display === "none") {
        click.style.display = "block";
    } else {
        click.style.display = "none";
    }
}

function show_hide4() {
    var click = document.getElementById("drop-content4");
    if (click.style.display === "none") {
        click.style.display = "block";
    } else {
        click.style.display = "none";
    }
}



// // Slide-show -> product card -> funkcionalnost
// var slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8", "mySlides9", "mySlides10", "mySlides11", "mySlides12"];

// function plusSlides(n, no) {
//     showSlides(slideIndex[no] += n, no);
// }
// function showSlides(n, no) {
//     var i;
//     var x = document.getElementsByClassName(slideId[no]);
//     if (n > x.length) {
//         slideIndex[no] = 1
//     }
//     if (n < 1) {
//         slideIndex[no] = x.length
//     }
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     x[slideIndex[no] - 1].style.display = "block";
// }

// var slideId=[];
// for (let i = 0; i <=13; i++) {
//     showSlides (1, i);
//     // "mySlide"+i.toString();  
// }
// Slide-show -> product card -> funkcionalnost
var slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8", "mySlides9","mySlides10","mySlides11","mySlides12","mySlides13"];
function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}
function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {
        slideIndex[no] = 1
    }
    if (n < 1) {
        slideIndex[no] = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}
for (let i = 0; i <= 13; i++) {
    showSlides (1, i); 
}
