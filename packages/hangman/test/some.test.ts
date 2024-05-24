import { expect, should } from "chai";
should();
describe("Hangman", () => {

  it("should have a word of length 3", () => {
    new Hangman().wordLength().should.be.equal(3);
  });

  it("should have a word of length 4", () => {
    new Hangman("moon").wordLength().should.be.equal(4);
  });

  it("should guess a letter", () => {
    const hangman = new Hangman("dad");
    hangman.guess("a");
    hangman.getLives().should.be.equal(10);
  });

  it("should fail a guess", () => {
    const hangman = new Hangman("dad");
    hangman.guess("b");
    hangman.getLives().should.be.equal(9);
  });
});


class Hangman {
  private word: string;
  private lives: number;
  constructor(word: string = "dad") {
    this.word = word;
    this.lives = 10;
  }
  wordLength() {
    return this.word.length;
  }
  guess(letter: string) {
    if (!this.word.includes(letter)) {
      this.lives--;
    }
  }
  getLives() {
    return this.lives;
  }

};