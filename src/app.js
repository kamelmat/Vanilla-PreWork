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

boton_cargar_carta.addEventListener("clic", () => {
  generarCartaAleatoria();
});

function generarCartaAleatoria() {
  //alert('Generando carta...');
  card_head.className = "";
  card_footer.className = "";

  //generar un valor aleatorio a
  let pinta = generarPintaAleatoria();

  let pintas = ["hearts", "diamonds", "clubs", "spades"];
  let randomIndex = Math.floor(Math.random() * pintas.length);
  let pinta = pintas[randomIndex];
  card_head.className = pinta;
  card_footer.className = pinta + " inverse ";
}

function generarPintaAleatoria() {
  let num_aleatorio_pinta = Math.round(Math.random() * 4);
  switch (num_aleatorio_pinta) {
    case 1:
      pinta = "heart";
      break;

    case 2:
      pinta = "diamond";
      break;

    case 3:
      pinta = "spade";
      break;

    case 4:
      pinta = "club";
      break;
  }
  return pinta;
}
