const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.btn.prev');
const nextBtn = document.querySelector('.btn.next');

let currentIndex = 1; // Start at first real slide
let autoPlay;
let isTransitioning = false; // Prevent rapid clicking

// Clone first and last slides for circular seamless effect
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
    // Add bounds checking
    if (currentIndex < 0 || currentIndex >= allSlides.length) {
        console.warn('Index out of bounds:', currentIndex);
        return;
    }
    
    isTransitioning = true;
    track.style.transition = 'transform 0.3s ease-in-out';
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Next button with debouncing
nextBtn.addEventListener('click', () => {
    if (isTransitioning) return; // Prevent rapid clicking
    
    currentIndex++;
    // Bounds check
    if (currentIndex >= allSlides.length) {
        currentIndex = allSlides.length - 1;
    }
    moveSlide();
});

// Prev button with debouncing
prevBtn.addEventListener('click', () => {
    if (isTransitioning) return; // Prevent rapid clicking
    
    currentIndex--;
    // Bounds check
    if (currentIndex < 0) {
        currentIndex = 0;
    }
    moveSlide();
});

// Reset position after the clone image is shown
track.addEventListener('transitionend', () => {
    isTransitioning = false; // Reset transition flag
    
    // Add safety check
    if (!allSlides[currentIndex]) {
        console.warn('Slide at index', currentIndex, 'does not exist');
        return;
    }
    
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

function startAutoPlay() {
    autoPlay = setInterval(() => {
        if (isTransitioning) return; // Don't auto-advance during transition
        
        currentIndex++;
        // Bounds check for auto-play
        if (currentIndex >= allSlides.length) {
            currentIndex = allSlides.length - 1;
        }
        moveSlide();
    }, 3000);
}

function stopAutoPlay() {
    clearInterval(autoPlay);
}

startAutoPlay();

track.addEventListener('mouseenter', stopAutoPlay);
track.addEventListener('mouseleave', startAutoPlay);

