const images = [
  "images/image1.jpeg",
  "images/original1.jpeg",
  "images/original4.jpeg"
];

let index = 0;

const img = document.querySelector(".slide-image");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  img.src = images[index];
});

next.addEventListener("click", () => {
  index = (index + 1) % images.length;
  img.src = images[index];
});