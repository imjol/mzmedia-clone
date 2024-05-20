// const swiper = new Swiper(".projectSlider", {
//   speed: 400,
//   spaceBetween: 100,
//   slidesPerView: 4,
//   loop: true,
//   autoplay: {
//     delay: 2000,
//   },
// });
document.addEventListener("DOMContentLoaded", function () {
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
});
