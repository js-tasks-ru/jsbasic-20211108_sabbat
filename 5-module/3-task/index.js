function initCarousel() {
    const numberOfSlides = 4;
    
    let carouselInner = document.querySelector('.carousel__inner');
    let arrowRight = document.querySelector('.carousel__arrow_right');
    let arrowLeft = document.querySelector('.carousel__arrow_left');

    let currentSlideNumber = 0;

    const width = carouselInner.offsetWidth;
    const shift = -width * currentSlideNumber;

    function updateCarousel() {
        const width = carouselInner.offsetWidth;
        const shift = -width * currentSlideNumber;
    
        carouselInner.style.transform = `translateX(${shift}px)`;

        if (currentSlideNumber == numberOfSlides - 1) {
            arrowRight.style.display = 'none';
        } else {
            arrowRight.style.display = '';
        }

        if (currentSlideNumber == 0) {
            arrowLeft.style.display = 'none';
        } else {
            arrowLeft.style.display = '';
        }
    }

    updateCarousel()

    arrowRight.onclick = function() {
        nextSlide();
    }

    arrowLeft.onclick = function() {
        previousSlide();
    }

    function nextSlide() {
        currentSlideNumber++;
        updateCarousel();
    }

    function previousSlide() {
        currentSlideNumber--;
        updateCarousel();
    }
    
    

}