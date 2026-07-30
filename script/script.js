document.addEventListener("DOMContentLoaded", () => {
  const slidesTrack = document.getElementById("slidesTrack");
  const slides = slidesTrack.querySelectorAll("img");
  const pagination = document.getElementById("pagination");

  let currentIndex = 0;
  const totalSlides = slides.length;

  // Render dots dynamically
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className =
      "h-2 w-2 cursor-pointer rounded-full bg-white/50 transition-all duration-300 hover:bg-white";
    if (index === 0) {
      dot.classList.add("!w-5", "!bg-white");
    }

    dot.addEventListener("click", () => goToSlide(index));
    pagination.appendChild(dot);
  });

  const dots = pagination.querySelectorAll("div");

  function goToSlide(index) {
    currentIndex = index;
    slidesTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Toggle active styles on dots
    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.className =
          "h-2 w-5 cursor-pointer rounded-full bg-white transition-all duration-300";
      } else {
        dot.className =
          "h-2 w-2 cursor-pointer rounded-full bg-white/50 transition-all duration-300 hover:bg-white";
      }
    });
  }

  // Auto-play switch
  setInterval(() => {
    const nextIndex = (currentIndex + 1) % totalSlides;
    goToSlide(nextIndex);
  }, 7000);
});