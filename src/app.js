/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let a = ["el", "nuestro"];
  let b = ["Gran", "Mejor", "Pequeño"];
  let c = ["Lebowsky", "Isra"];
  let d = [".es", ".com", ".net", ".tv", ".io"];

  function generarDominios(a, b, c) {
    let dominios = [];

    for (let i of a) {
      for (let j of b) {
        for (let k of c) {
          for (let l of d) {
            let dominio = i + j + k + l;
            dominios.push(dominio);
          }
        }
      }
    }

    return dominios;
  }

  let combinaciones = generarDominios(a, b, c);
  combinaciones.forEach(dominio => console.log(dominio));

  document.getElementById("domainNames").innerHTML = combinaciones.join("<br>");
};
