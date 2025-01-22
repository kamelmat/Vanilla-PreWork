/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.addEventListener("DOMContentLoaded", () => {
  // Array de frases
  const phrases = [
    "Cuando te das cuenta que es lunes otra vez...",
    "Yo esperando el fin de semana como...",
    "No estaba preparado para esto.",
    "Cuando tu código no funciona y no sabes por qué.",
    "¿Por qué no me sale el examen si estudié?"
  ];

  // Selección de elementos del DOM
  const imageSelect = document.getElementById("image-select");
  const memeImage = document.getElementById("meme-image");
  const memeText = document.getElementById("meme-text");
  const generateButton = document.getElementById("generate");
  const customTextInput = document.getElementById("custom-text");

  // Cambiar la imagen al seleccionar una nueva opción
  imageSelect.addEventListener("change", () => {
    const selectedImage = imageSelect.value;
    memeImage.src = selectedImage;
  });

  // Generar una frase aleatoria
  generateButton.addEventListener("click", () => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    memeText.textContent = randomPhrase;
  });

  // Actualizar el texto del meme con entrada personalizada
  customTextInput.addEventListener("input", event => {
    memeText.textContent = event.target.value;
  });
});
