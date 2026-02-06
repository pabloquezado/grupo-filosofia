import { renderResearch } from "./papers.js";

document.addEventListener("DOMContentLoaded", () => {
  renderResearch();
});

/* ===== Slider ===== */

const images = [
  "./assets/testecrop1.png",
  "https://pabloquezado.github.io/filocomplexaeduca/assets/encontro-12.jpeg",
  "https://pabloquezado.github.io/filocomplexaeduca/assets/encontro-11.jpeg",
  "https://pabloquezado.github.io/filocomplexaeduca/assets/encontro-9.jpeg",
  "https://pabloquezado.github.io/filocomplexaeduca/assets/imgcrop.png",
  "https://pabloquezado.github.io/filocomplexaeduca/assets/encontro2.jpeg",
  "https://pabloquezado.github.io/filocomplexaeduca/assets/encontro3.jpg",
  "https://iear.uff.br/wp-content/uploads/sites/232/2025/07/Foto-de-Nicolle-Jordao-768x1024.jpg"
];

let currentImage = 0;
const sliderImage = document.getElementById("slider-image");
const nextBtn = document.querySelector(".slider-btn.next");

if (nextBtn && sliderImage) {
  nextBtn.addEventListener("click", () => {
    currentImage = (currentImage + 1) % images.length;
    sliderImage.src = images[currentImage];
  });
}
