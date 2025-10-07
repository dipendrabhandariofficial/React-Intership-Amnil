function createCarousel(containerId = null, images = [], options = {}) {

    // Default options
    const config = {
        autoplay: options.autoplay ?? true, //takes value from the user
        interval: options.interval ?? 3000,
        showButtons: options.showButtons ?? true,
        transitionTime: options.transitionTime ?? 0.3, // seconds
    };

    // Create or get container
    let container;
    if (containerId) {
        container = document.getElementById(containerId);
        console.log("matching id with the already made div");

        if (!container) {
            console.warn(`Container with ID "${containerId}" not found. Creating a new div with the given id.`);
            console.log(container);

            container = document.createElement("div");
            container.id = containerId; // ✅ assign the id here
            document.body.appendChild(container);
            console.log("create new div with that id ");

        }
    } else {
        container = document.createElement("div");
        container.classList.add("carousel-wrapper");
        document.body.appendChild(container);
        console.log("if no id is passed then automatic wrapper is created ")
    }

    // Inject default CSS if not already
    if (!document.getElementById("carousel-style-inline") && !document.getElementById("carousel-style-external")) {
        const stylee = document.createElement("style");
        stylee.id = "carousel-style";
        stylee.innerHTML = `
      .carousel { position: relative; overflow: hidden; width: 100%; max-width: 800px; margin: auto; touch-action: pan-y; }
      .carousel-track { display: flex; transition: transform ${config.transitionTime}s ease-in-out; }
      .slide { min-width: 100%; box-sizing: border-box; user-select: none; }
      .slide img { width: 100%; display: block; pointer-events: none; }
      .btn { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; padding: 10px; cursor: pointer; font-size: 1.5rem; }
      .btn.prev { left: 10px; }
      .btn.next { right: 10px; }
      .btn:hover { background: rgba(0,0,0,0.8); }
    `;
        document.head.appendChild(stylee);
        console.log("inject default css");

    }

    // Create carousel HTML
    container.innerHTML = `
    <div class="carousel">
      <div class="carousel-track"></div>
      ${config.showButtons ? `<button class="btn prev">‹</button><button class="btn next">›</button>` : ''}
    </div>
  `;

    const track = container.querySelector(".carousel-track");
    const prevBtn = container.querySelector(".btn.prev");
    const nextBtn = container.querySelector(".btn.next");

    // Add slides dynamically
    images.forEach((img, i) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");
        if (typeof img === "string") {
            slide.innerHTML = `<img src="${img}" alt="slide-${i}">`;
            console.log(typeof (img), img);

        } else {
            slide.innerHTML = `<a href="${img.link || '#'}"><img src="${img.src}" alt="${img.alt || `slide-${i}`}"></a>`;
            console.log(typeof (img), img);

        }
        track.appendChild(slide);
    });

    // Clone first and last slides for infinite effect
    const slides = Array.from(track.children);
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    firstClone.id = "first-clone";
    lastClone.id = "last-clone";
    track.appendChild(firstClone);
    track.insertBefore(lastClone, slides[0]);

    const allSlides = Array.from(track.children);
    let currentIndex = 1;
    let autoPlay;
    let isTransitioning = false;

    // Set initial position
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    function moveSlide() {
        //add bound checks
        if (currentIndex < 0 || currentIndex >= allSlides.length) {
            console.warn('index out of bounds:', currentIndex);
            return;
        }
        isTransitioning = true;
        track.style.transition = `transform ${config.transitionTime}s ease-in-out`;
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

    // Swipe / touch support
    let startX = 0;
    let isDragging = false;

    track.addEventListener("touchstart", (e) => {
        stopAutoPlay();
        //list the first finger touch and record
        //  the horizontal cordinate of the touch from left
        startX = e.touches[0].clientX;
        console.log(startX, "start cordinate");
        isDragging = true; //prevents random moves when user is not actually swiping.
        track.style.transition = "none";
    });

    track.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        console.log(currentX, "current coordinate");
        const diff = currentX - startX;
        track.style.transform = `translateX(calc(-${currentIndex * 100}% + ${diff}px))`;
    });

    track.addEventListener("touchend", (e) => {
        isDragging = false;
        const endX = e.changedTouches[0].clientX;
        const diff = endX - startX;
        if (Math.abs(diff) > 50) { // minimum swipe distance
            if (diff < 0) currentIndex++; // swipe left → next
            else currentIndex--; // swipe right → prev
        }
        moveSlide();
        if (config.autoplay) startAutoPlay();
    });
}
