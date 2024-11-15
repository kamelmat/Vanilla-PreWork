window.onload = function() {
  const card = document.getElementById("card");
  const newCardButton = document.getElementById("newCardButton");

  function generateCard() {
    const suits = ["heart", "spade", "diamond", "club"];
    const values = [
      "A",
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
      "K"
    ];

    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];

    // Asegúrate de que se aplique la clase del palo junto con la clase `card`
    card.className = `card ${randomSuit}`; // Aquí se establece la clase `card` y el palo (p. ej., `card heart`)

    card.innerHTML = `
      <div class="top-left">${randomValue} ${getSuitSymbol(randomSuit)}</div>
      <div style="font-size: 4rem;">${getSuitSymbol(randomSuit)}</div>
      <div class="bottom-right">${randomValue} ${getSuitSymbol(
      randomSuit
    )}</div>
    `;
  }

  function getSuitSymbol(suit) {
    switch (suit) {
      case "heart":
        return "♥";
      case "spade":
        return "♠";
      case "diamond":
        return "♦";
      case "club":
        return "♣";
    }
  }

  generateCard();
  newCardButton.addEventListener("click", generateCard);
  setInterval(generateCard, 10000);
};
