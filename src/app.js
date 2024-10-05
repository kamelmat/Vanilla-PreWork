/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  generarCartaAleatoria(card_head, card_footer, card_value);
};

let card_head = document.querySelector("#header");
let card_footer = document.querySelector("#footer");
let card_value = document.querySelector("#number");
let boton_cargar_carta = document.querySelector(".button_new_card");

boton_cargar_carta.addEventListener("click", () => {
  generarCartaAleatoria(card_head, card_footer, card_value);
});

function generarCartaAleatoria(card_head, card_footer, card_value) {
  //alert('Generando carta...');
  card_head.className = "";
  card_footer.className = "";

  //generar un valor aleatorio a
  let pinta = generarPintaAleatoria();

  card_head.className = pinta;
  card_footer.className = pinta + " inverse ";

  let valor = generarValorAleatorio();
  card_value.textContent = valor;
}

function generarPintaAleatoria() {
  let num_aleatorio_pinta = Math.floor(Math.random() * 4) + 1;
  let pinta;
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
    default:
  }
  return pinta;
}

function generarValorAleatorio() {
  let valores = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let num_aleatorio_valor = Math.floor(Math.random() * valores.length);
  return valores[num_aleatorio_valor];
}
