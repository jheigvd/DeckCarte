import Card from "./Card.js";
// sans PARCEL import shuffle from "./node_modules/lodash-es/shuffle.js";
// avec PARCEL et lodash-es import { shuffle } from "lodash-es";
// avec PARCEL et lodash si on a désinstaller lodash-es
import shuffle from "lodash";

class Deck {
  #cards = [];
  constructor(options) {
    this.values = options.values;
    this.suits = options.suits;
  }
  createFullDeck() {
    this.values.forEach((element1) => {
      this.suits.forEach((element2) => {
        this.#cards.push(new Card(element1, element2));
      });
    });
    return this;
  }
  shuffle() {
    this.#cards = shuffle(this.#cards);
    return this;
  }
  displayCards() {
    this.#cards.forEach((element3) => {
      element3.display();
    });
    return this;
  }
}

export default Deck;
