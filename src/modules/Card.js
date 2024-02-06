class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
    this.element = this.#generateCardElement();
  }

  display() {
    document.querySelector(".deck").appendChild(this.element); // Ajout de la carte dans le DOM
    this.element.addEventListener("click", this.#toggleHidden.bind(this)); // Ajout de l'écouteur d'événement click sur la carte
    // bind(this) lier le this, faire référence à Card dans la méthode #toggleHidden
    return this;
  }

  #generateCardElement() {
    const card = document.createElement("div");
    card.dataset.value = this.value; // Ajout de l'attribut data-value à la carte
    card.dataset.suit = this.suit; // Ajout de l'attribut data-suit à la carte

    card.classList.add("card");
    card.classList.add("hidden");
    card.classList.add(`v${this.value}`); // Ajout de la classe v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13
    card.classList.add(this.suit.toLowerCase()); // Ajout de la classe hearts, diamonds, clubs, spades en minuscule

    const interior = document.createElement("div");
    interior.classList.add("interior");
    interior.insertAdjacentHTML("afterbegin", this.#generateCardInterior());
    card.appendChild(interior);
    return card;
  }

  #generateCardInterior() {
    // si la valeur de la carte est un nombre, on crée un nombre de symboles correspondant à la valeur
    if (!isNaN(this.value)) {
      let html = "";
      // pour chaque symbole, on ajoute un élément avec la classe symbol
      for (let i = 1; i <= this.value; i++) {
        html += `<div class="symbol"></div>`;
      }
      return html;
    } else {
      // on retourne la valeur de la carte tels que "J", "Q", "K", "A"
      return `<div class="title">${this.value}</div>`;
    }
  }

  // méthode pour afficher ou cacher la carte
  #toggleHidden() {
    this.element.classList.toggle("hidden"); // Ajout ou suppression de la classe hidden
    // toggle() ajoute la classe si elle n'est pas présente, sinon la supprime
  }
}

export default Card;
