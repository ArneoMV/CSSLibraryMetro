// Smooth scroll

const makeNavLinksSmooth = ( ) => {
  const navLinks = document.querySelectorAll( '.nav-link' );

  for ( let n in navLinks ) {
    if ( navLinks.hasOwnProperty( n ) ) {
      navLinks[ n ].addEventListener( 'click', e => {
        e.preventDefault( );
        document.querySelector( navLinks[ n ].hash )
          .scrollIntoView( {
            behavior: "smooth"
          } );
      } );
    }
  }
}

const spyScrolling = ( ) => {
  const sections = document.querySelectorAll('.hero-bg');

  window.onscroll = ( ) => {
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    for ( let s in sections )
      if ( sections.hasOwnProperty( s ) && sections[ s ].offsetTop <= scrollPos ) {
        const id = sections[ s ].id;
        document.querySelector( '.active_NavBar' ).classList.remove( 'active_NavBar' );
        document.querySelector( `a[href*=${ id }]` ).parentNode.classList.add( 'active_NavBar' );
      }
  }  
}

makeNavLinksSmooth( );
spyScrolling( );


// Scrollspy
(function() {
  'use strict';

  const section = document.querySelectorAll('.hero-bg');
  var sections_NavBar = {};
  var i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections_NavBar[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections_NavBar) {
      if (sections_NavBar[i] <= scrollPosition) {
        document.querySelector('.active_NavBar').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active_NavBar');
      }
    }
  };
})();

