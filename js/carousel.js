/* Carousel */

const track_Carousel = document.querySelector('.track_Carousel');
let slides_Carousel = Array.from(track_Carousel.children);

// Buttons
const btn_nextCarousel = document.querySelector('.btn_nextCarousel');
const btn_prevCarousel = document.querySelector('.btn_prevCarousel');
// Dots
const dots_NavCarousel = document.querySelector('.dots_NavCarousel'); 
const dots_Carousel = Array.from(dots_NavCarousel.children);

// Counter
const slideWidth = slides_Carousel[0].getBoundingClientRect().width;


// arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides_Carousel.forEach(setSlidePosition);


const moveToSlide = (track_Carousel, currentSlide, targetSlide) => {
    track_Carousel.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides_Carousel, btn_prevCarousel, btn_nextCarousel, targetIndex) => {
    if (targetIndex === 0) {
        btn_prevCarousel.classList.add('is-hidden');
        btn_nextCarousel.classList.remove('is-hidden');
    } else if (targetIndex === slides_Carousel.length - 1 ) {
        btn_prevCarousel.classList.remove('is-hidden');
        btn_nextCarousel.classList.add('is-hidden');
    } else {
        btn_prevCarousel.classList.remove('is-hidden');
        btn_nextCarousel.classList.remove('is-hidden');
    }
}


// when I click left, move slide to the left
btn_prevCarousel.addEventListener('click', e => {
    const currentSlide = track_Carousel.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dots_NavCarousel.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides_Carousel.findIndex(slide => slide === prevSlide);

    moveToSlide(track_Carousel, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides_Carousel, btn_prevCarousel, btn_nextCarousel, prevIndex);
});

// when I click right, move slide to the right
btn_nextCarousel.addEventListener('click', e => {
    const currentSlide = track_Carousel.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dots_NavCarousel.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides_Carousel.findIndex(slide => slide === nextSlide);

    moveToSlide(track_Carousel, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides_Carousel, btn_prevCarousel, btn_nextCarousel, nextIndex);
});


// when I click the nav indicators, move to that slide
dots_NavCarousel.addEventListener('click', e => {
    //what indicator was clicked on?
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track_Carousel.querySelector('.current-slide');
    const currentDot = dots_NavCarousel.querySelector('.current-slide');
    const targetIndex = dots_Carousel.findIndex(dot => dot === targetDot);
    const targetSlide = slides_Carousel[targetIndex];
   
    moveToSlide(track_Carousel, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides_Carousel, btn_prevCarousel, btn_nextCarousel, targetIndex);
});