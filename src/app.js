/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  generarCartaAleatoria();
};

let card_head = document.querySelector("#header");
let card_footer = document.querySelector("#footer");
let boton_cargar_carta = document.querySelector(".button_new_card");

boton_cargar_carta.addEventListener("click", () => {
  generarCartaAleatoria();
});

function generarCartaAleatoria() {
  //alert('Generando carta...');
  card_head.className = "";
  card_footer.className = "";

  //generar un valor aleatorio a
  let pinta = generarPintaAleatoria();

  card_head.className = pinta;
  card_footer.className = pinta + " inverse ";
}

function generarPintaAleatoria() {
  let num_aleatorio_pinta = Math.floor(Math.random() * 4) + 1;
  let pinta;
  switch (num_aleatorio_pinta) {
    case 1:
      pinta = "hearts";
      break;

    case 2:
      pinta = "diamonds";
      break;

    case 3:
      pinta = "spades";
      break;

    case 4:
      pinta = "clubs";
      break;
    default:
  }
  return pinta;
}
