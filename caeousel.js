const images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"];
let index = 0;
const imageElement = document.querySelector(".carousel-image");

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % images.length;
  imageElement.src = images[index];
});

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  imageElement.src = images[index];
});
