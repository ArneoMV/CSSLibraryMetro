/* MAIN SCRIPT */

// MAIN NAVIGATION
function mainNavigation() {
    var checkBox = document.getElementById("mainNav");
    
    if (checkBox.checked == true){
        document.getElementById("mainSidebar").style.width = "350px";
        // document.getElementById("main").style.marginLeft = "350px";
        
       
    } else {
        document.getElementById("mainSidebar").style.width = "0";
        // document.getElementById("main").style.marginLeft= "0";
    }
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

// ALERT
try {
    //  MODAL
    // Get modal element
    var modal = document.getElementById('simpleModal');
    // Get open modal btn
    var modalBtn = document.getElementById('modalBtn');
    // Get close btn
    var closeBtn = document.getElementsByClassName('closeBtn')[0];

    // Listen for open click
    modalBtn.addEventListener('click', openModal);
    // Listen for close click
    closeBtn.addEventListener('click', closeModal);
    // Listen for outside click
    window.addEventListener('click', outsideClick);
} catch (err) {}

// Function to open modal
function openModal() {
    modal.style.display = 'block';
}
// 	Function to close modal
function closeModal() {
    modal.style.display = 'none';
}
// Function to close modal
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

// BUTTON RIPPLE
var buttons = document.getElementsByClassName('btn-ripple');

Array.prototype.forEach.call(buttons, function(b) {
    b.addEventListener('click', createRipple);
})

function createRipple(e) {
    if (this.getElementsByClassName('ripple').length > 0) {
        this.removeChild(this.childNodes[1]);
    }

    var circle = document.createElement('div');
    this.appendChild(circle);

    var d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + 'px';

    circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
    circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';

    circle.classList.add('ripple');
}


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



