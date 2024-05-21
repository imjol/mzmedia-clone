document.addEventListener("DOMContentLoaded", function () {
  // Initialize Marquee
  const marquees = document.querySelectorAll(".rfm-marquee");

  marquees.forEach((marquee) => {
    const speed = 50; // Adjust speed as needed (pixels per second)
    const containerWidth = marquee.parentElement.offsetWidth;
    const contentWidth = marquee.scrollWidth;

    const duration = (contentWidth + containerWidth) / speed;

    // Get the direction from the data attribute
    const direction = marquee.getAttribute("data-direction");

    // Determine the keyframes based on the direction
    const keyframes =
      direction === "right-to-left"
        ? "marqueeRightToLeft"
        : "marqueeLeftToRight";

    // Set animation properties
    marquee.style.animation = `${keyframes} ${duration}s linear infinite`;
    marquee.style.animationPlayState = "running";
  });

  // Add hover pause functionality
  marquees.forEach((marquee) => {
    marquee.parentElement.addEventListener("mouseover", () => {
      marquee.style.animationPlayState = "paused";
    });

    marquee.parentElement.addEventListener("mouseout", () => {
      marquee.style.animationPlayState = "running";
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

  // processSlider
  const processSlider = new Swiper(".processSlider", {
    slidesPerView: 3,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },
    gap: 10,
    navigation: {
      nextEl: ".next-process",
      prevEl: ".prev-process",
    },
  });

  // faq-area
  const accordionButtons = document.querySelectorAll(
    '[data-testid="flowbite-accordion"] button'
  );

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const accordionContent = this.nextElementSibling;
      accordionContent.hidden = !accordionContent.hidden; // Toggle visibility
    });
  });

  // scrollToTop
  const scrollToTopButton = document.getElementById("scrollToTop");

  scrollToTopButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // menu
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");
  const firstLine = document.getElementById("firstLine");
  const secondLine = document.getElementById("secondLine");
  const thirdLine = document.getElementById("thirdLine");

  menuToggle.addEventListener("click", () => {
    firstLine.classList.toggle("-translate-x-0");
    firstLine.classList.toggle("translate-x-2");
    secondLine.classList.toggle("hidden");
    thirdLine.classList.toggle("-translate-x-0");
    thirdLine.classList.toggle("-translate-x-2");

    menu.classList.toggle("translate-y-0");
    menu.classList.toggle("max-sm:-translate-y-[220rem]");
  });
});
