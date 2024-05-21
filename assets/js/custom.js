document.addEventListener("DOMContentLoaded", function () {
  // Initialize Marquee
  const marquees = document.querySelectorAll(".rfm-marquee");

  marquees.forEach((marquee) => {
    const speed = 50; // Adjust speed as needed (pixels per second)
    const containerWidth = marquee.parentElement.offsetWidth;
    const contentWidth = marquee.scrollWidth;

    const duration = (contentWidth + containerWidth) / speed;

    marquee.style.animationDuration = `${duration}s`;
    marquee.style.animationDirection =
      marquee.style.getPropertyValue("--direction") || "normal";
    marquee.style.animationPlayState =
      marquee.style.getPropertyValue("--play") || "running";
  });

  // Add hover pause functionality
  marquees.forEach((marquee) => {
    marquee.parentElement.addEventListener("mouseover", () => {
      marquee.classList.add("paused");
    });

    marquee.parentElement.addEventListener("mouseout", () => {
      marquee.classList.remove("paused");
    });
  });

  // Testimonial Slider
  const testimonials = document.querySelectorAll(".testimonial");
  const nextButton = document.querySelector(".next-testimonial");
  let currentIndex = 0;

  function updateTestimonials() {
    testimonials.forEach((testimonial, index) => {
      if (index === currentIndex) {
        testimonial.classList.add("opacity-100", "duration-500");
        testimonial.classList.remove(
          "opacity-0",
          "max-sm:hidden",
          "duration-300"
        );
      } else {
        testimonial.classList.add("opacity-0", "max-sm:hidden", "duration-300");
        testimonial.classList.remove("opacity-100", "duration-500");
      }
    });
  }

  const swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    on: {
      init: function () {
        currentIndex = this.realIndex; // 'this' refers to the Swiper instance
        updateTestimonials();
      },
      slideChange: function () {
        currentIndex = this.realIndex; // 'this' refers to the Swiper instance
        updateTestimonials();
      },
    },
  });

  // Event listener for the next button
  nextButton.addEventListener("click", function () {
    swiper.slideNext();
  });
});
