import Card from "./Card";
// sans PARCEL import shuffle from "./node_modules/lodash-es/shuffle.js";
// avec PARCEL et lodash-es import { shuffle } from "lodash-es";
// avec PARCEL et lodash si on a désinstaller lodash-es
import { shuffle } from "lodash";

class Deck {
  #cards = [];
  constructor(options) {
    this.values = options.values; // ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"]
    this.suits = options.suits; // ["Hearts", "Diamonds", "Spades", "Clubs"]
  }
  // méthode pour créer un jeu de cartes complet
  createFullDeck() {
    // pour chaque valeur (A, 2, 3, 4, 5, 6, 7, 8, 9, J, Q, K)
    this.values.forEach((element1) => {
      // pour chaque symbole (pique, coeur, carreau, trèfle)
      this.suits.forEach((element2) => {
        // on ajoute la carte au jeu de cartes
        this.#cards.push(new Card(element1, element2)); // Ajout de la carte au jeu de cartes avec la valeur et le symbole
      });
    });
    return this;
  }
  // méthode pour mélanger les cartes
  shuffle() {
    this.#cards = shuffle(this.#cards);
    return this;
  }

  displayCards() {
    // pour chaque carte, on appelle la méthode display pour l'afficher
    this.#cards.forEach((element3) => {
      element3.display();
    });
    return this;
  }
}

export default Deck;
