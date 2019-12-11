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