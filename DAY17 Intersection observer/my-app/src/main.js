const slideshow = document.getElementById("slideshow");
const slides = document.querySelectorAll(".slider");
const currentIndex = 0;
const slideshowInterval = null;
// Start slideshow
function startSlideshow() {
  if (!slideshowInterval) {
    slideshowInterval = setInterval(() => {
      slides[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add("active");
    }, 2000);
  }
}

// Stop slideshow
function stopSlideshow(){
  clearInterval(slideshowInterval);
  slideshowInterval=null;
}

// Intersection Observer
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      startSlideshow();
    }
    else{
      stopSlideshow();
    }

  });

})
observer.observe(slideshowContainer);
