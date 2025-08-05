// DOM Elements
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-img');

const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = carousel.querySelector('.carousel-btn.next');
    const prevButton = carousel.querySelector('.carousel-btn.prev');


    // Calculate slide width
    const slideWidth = slides[0].offsetWidth;

    // Arrange the slides next to one another
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });

    // Move to target slide
    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    // Prev button click
    prevButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide');
        let prevSlide = currentSlide.previousElementSibling;
        if (!prevSlide) {
            prevSlide = slides[slides.length - 1]; // loop to last slide
        }
        moveToSlide(track, currentSlide, prevSlide);
    });

    // Next button click
    nextButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide');
        let nextSlide = currentSlide.nextElementSibling;
        if (!nextSlide) {
            nextSlide = slides[0]; // loop to first slide
        }
        moveToSlide(track, currentSlide, nextSlide);
    });

    // Add click listeners on each slide image to open lightbox
    slides.forEach(slide => {
        const img = slide.querySelector('img');
        if (img) {
            img.style.cursor = 'pointer'; // pointer on hover
            img.addEventListener('click', () => {
                lightboxImage.src = img.src;
                lightbox.style.display = 'flex';  // show lightbox
            });
        }
    });
});

// Close lightbox when clicking outside image or on close button
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('close')) {
        lightbox.style.display = 'none';
        lightboxImage.src = '';
    }
});
