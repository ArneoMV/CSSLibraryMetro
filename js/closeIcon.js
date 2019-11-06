// HAMBURGER ICON

// Hamburger icon 2
let wrapperMenu = document.getElementById('burger_2');

function hambi2() {

  if (wrapperMenu) {
    wrapperMenu.addEventListener('click', function() {
      wrapperMenu.classList.toggle('openBurger2');  
    })
  }
}

hambi2();


// BROJ 2
// This is a general function that could take functionality from many places.
// All it does is toggle a class on or off, like so:
// 01: Does "this" target HTML element have "that" class?
// 02: If it does, remove that class.
// 03: If it doesn't, add that class.
// 04: End function.

// function toggleClass(targetElement, addedClass) {

  //   if (targetElement.classList.contains(addedClass)) {
  //     targetElement.classList.remove(addedClass);
  //   }
  //   else {
  //     targetElement.classList.add(addedClass);
  //   }
  // }
