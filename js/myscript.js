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
        sidebar.style.transition = "600ms ease";
        sidebar.style.opacity = "1";
    } else {
        sidebar.style.width = "0";
        sidebar.style.transition = "600ms ease";
        sidebar.style.filter = "alpha(opacity=0)";
        sidebar.style.opacity = "0";
    }
}
// link
sidebar.addEventListener('click', function() {
    // Uncheck
    checkBox.checked = false;
    sidebar.style.width = "0px";
    sidebar.style.transition = "600ms ease";
    sidebar.style.filter = "alpha(opacity=0)";
    sidebar.style.opacity = "0";
    console.log('Click just happened');
});


// Add or remove active class
var elements = document.getElementsByClassName("child");
for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function(){
        // remove class from sibling   
        var el = elements[0];
        while(el) {
            if(el.tagName === "DIV"){
                //remove class
                el.classList.remove("bak");   
            }
            // pass to the new sibling
            el = el.nextSibling;
        } 
        this.classList.add("bak");  
    };
}

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






