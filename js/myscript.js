/* MAIN SCRIPT */

// MAIN NAVIGATION
var sidebar = document.getElementById('mainSidebar');
var checkBox = document.getElementById("mainNav");
var link = document.querySelectorAll("a");

// hamburger
function mainNavigation() {
    // close navigation if hamburger clicked
    if (checkBox.checked == true) {
        sidebar.style.width = "350px";
    } else {
        sidebar.style.width = "0";
    }
}
// link
sidebar.addEventListener('click', function() {
    // Uncheck
    checkBox.checked = false;
    sidebar.style.width = "0";

    console.log('Click just happened');
});


// syntax Highlight
function syntaxHighlights() {
    var ca = document.getElementsByTagName("code");
    for (var i = 0; i < ca.length; i++) {
        var data = ca[i].innerHTML;
        data = data.replace(/"(.*?)"/g, '<span class="code-str"> &quot; $1 &quot; </span>');
        data = data.replace(/&lt;(.*?)&gt;/g, '<span class="code-elem">&lt;$1&gt;</span>');
        data = data.replace(/\/\* (.*?) \*\//g, '<span class="code-comment">/* $1 */</span>');

        data = data.replace(/{(.*?)}/g, '<span class="code-curlyBracket">&lcub;$1&rcub;</span>');

        ca[i].innerHTML = data;
    }
}
window.addEventListener("load", syntaxHighlights);


// PROGRESS BAR
// Progress bar -> progress
var milisec = 0;
var max = 100;

function displayProgress() {
    if (milisec >= max) {
        document.getElementById('message').innerHTML = "Done!";
    }
    milisec += 10;
    document.getElementById('downloadProgress').value = milisec;
    setTimeout("displayProgress()", max);
}
// Progress bar -> div
function move() {
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 1);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}



