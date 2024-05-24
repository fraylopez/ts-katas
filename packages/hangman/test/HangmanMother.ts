import { Hangman } from "./some.test";


export class HangmanMother {

  static new(word: string = "dad", maxLives: number = 10) {
    return new Hangman(word, maxLives);
  }

  static withOneLife() {
    return this.new("", 1);
  }

  static withWord(word: string) {
    return this.new(word);
  }
}
