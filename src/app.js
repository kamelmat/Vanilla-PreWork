import "./styles.css";

const phrases = [
  "Cuando te das cuenta que es lunes otra vez...",
  "Yo esperando el fin de semana como...",
  "No estaba preparado para esto.",
  "Cuando tu código no funciona y no sabes por qué.",
  "¿Por qué no me sale el examen si estudié?"
];

// 1 - buscar y ligar los elementos de HTML. hay que crear variables y getEelementByid de todos los ids

const imageSelect = document.getElementById("image-select");
const generateButton = document.getElementById("generate");
const customTextInput = document.getElementById("custom-text");
const memeImage = document.getElementById("meme-image");
const memeText = document.getElementById("meme-text");

// Hacer una función que cambie la imagen al seleccionar una nueva imagen del desplegable.
imageSelect.addEventListener("change", () => {
  const selectedImage = imageSelect.value;
  memeImage.src = selectedImage;
});

// Generar una función que genere (elija del array) una frase aleatoria

generateButton.addEventListener("click", () => {
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  memeText.textContent = randomPhrase;
});

// Actualizar el texto del meme con el input del usuario

customTextInput.addEventListener("input", event => {
  memeText.textContent = event.target.value;
});

//Actualizar la imagen y el texto en la zona del meme
