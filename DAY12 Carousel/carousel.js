const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.btn.prev');
const nextBtn = document.querySelector('.btn.next');

let currentIndex = 1; // Start at first real slide
let autoPlay;

// Clone first and last slides for for cicrular seamless effect
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

const allSlides = Array.from(track.children);

// Set initial position
track.style.transform = `translateX(-${currentIndex * 100}%)`;

// Function to move slides
function moveSlide() {
    track.style.transition = 'transform 0.3s ease-in-out';
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Next button
nextBtn.addEventListener('click', () => {
    currentIndex++;
    moveSlide();
});

// Prev button
prevBtn.addEventListener('click', () => {
    currentIndex--;
    moveSlide();
});

// Reset position after the clone image is shown
track.addEventListener('transitionend', () => {
    if (allSlides[currentIndex].id === 'first-clone') {
        track.style.transition = 'none';
        currentIndex = 1; // jump to first real slide
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    if (allSlides[currentIndex].id === 'last-clone') {
        track.style.transition = 'none';
        currentIndex = allSlides.length - 2; // jump to last real slide
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});

function startautoPlay() {
    autoPlay = setInterval(() => {
        currentIndex++;
        moveSlide();
    }, 3000);
}

function stopautoPlay(){
    clearInterval(autoPlay);
}

startautoPlay();

track.addEventListener('mouseenter',stopautoPlay);
track.addEventListener('mouseleave',startautoPlay);


