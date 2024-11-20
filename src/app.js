import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let subjects = ["Mi perro", "Mi abuela", "Un extraterrestre", "El vecino"];
  let actions = ["se comió", "perdió", "rompió", "escondió"];
  let objects = ["mis deberes", "las llaves", "mi cartera", "el coche"];
  let places = ["en el parque", "en la oficina", "en la playa", "en casa"];

window.onload = function() {
  let getRandomElement = array =>
    array[Math.floor(Math.random() * array.length)];

  let generateExcuse = () => {
    let subject = getRandomElement(subjects);
    let action = getRandomElement(actions);
    let object = getRandomElement(objects);
    let place = getRandomElement(places);

    return `${subject} ${action} ${object} ${place}.`;
  };

  document.querySelector(".excuse").innerText = generateExcuse();
};
