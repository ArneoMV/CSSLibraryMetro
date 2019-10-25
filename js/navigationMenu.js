// ASIDE NAVIGATION MENU

// LEFT NAVIGATION
function leftNavigation() {
    var checkBox = document.getElementById("leftNav");
    
    if (checkBox.checked == true){
        document.getElementById("leftSidebar").style.width = "350px";
        document.getElementById("main").style.marginLeft = "350px";
       
    } else {
        document.getElementById("leftSidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }
}
// RIGHT NAVIGATION
function rightNavigation() {
    var checkBox = document.getElementById("rightNav");
    
    if (checkBox.checked == true){
        document.getElementById("rightSidebar").style.width = "350px";
        document.getElementById("main").style.marginRight = "350px";
       
    } else {
        document.getElementById("rightSidebar").style.width = "0";
        document.getElementById("main").style.marginRight= "0";
    }
}
// TOP NAVIGATION
function topNavigation() {
    var checkBox = document.getElementById("topNav");
    
    if (checkBox.checked == true){
        document.getElementById("topSidebar").style.height = "100%";
        // document.getElementById("main").style.marginTop = "auto";
       
    } else {
        document.getElementById("topSidebar").style.height = "0";
        // document.getElementById("main").style.marginTop= "0";
    }
}
// BOTTOM NAVIGATION
function bottomNavigation() {
    var checkBox = document.getElementById("bottomNav");
    
    if (checkBox.checked == true){
        document.getElementById("bottomSidebar").style.height = "calc(100% - 325px)";
    } else {
        document.getElementById("bottomSidebar").style.height = "0";
    }
}