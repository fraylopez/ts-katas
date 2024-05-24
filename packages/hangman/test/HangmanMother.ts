import { Hangman } from "../src/Hangman";


export class HangmanMother {

  static new(word: string = "dad", maxLives: number = 10) {
    return new Hangman(word, maxLives);
  }

  static withOneLife(word: string = "dad") {
    return this.new(word, 1);
  }

  static withWord(word: string) {
    return this.new(word);
  }
}
