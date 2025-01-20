/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = generarExcusa();
  });
};

let generarExcusa = () => {
  let sujeto = [
    "El Perro",
    "El Gato",
    "El Pingüino",
    "Mi Abuela",
    "El Profesor",
    "El anario",
  ];
  let accion = ["se comio", "se llevo", "rompio", "mordio", "escondio", "boto"];
  let objeto = [
    "mis papeles",
    "mi telefono",
    "mi coche",
    "mi tarea",
    "mis zapatillas",
  ];
  let cuando = [
    "esta mañana",
    "ayer por la tarde",
    "anoche",
    "hoy al mediodia",
    "Ayer a la noche",
    "No me acuerdo cuando paso",
  ];

  let arrayDeExcusas = [sujeto, accion, objeto, cuando];

  let excusa = arrayDeExcusas.map((arr) => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  });

  return excusa.join(" ");
};
