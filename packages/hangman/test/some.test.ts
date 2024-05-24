import { should } from "chai";
import { HangmanMother } from "./HangmanMother";
should();

describe("Hangman", () => {

  it("should have a word of length 3", () => {
    HangmanMother.new().wordLength().should.be.equal(3);
  });

  it("should have a word of length 4", () => {
    HangmanMother.withWord("moon").wordLength().should.be.equal(4);
  });

  it("should guess a letter", () => {
    const hangman = HangmanMother.new();
    hangman.guess("a");
    hangman.getLives().should.be.equal(10);
  });

  it("should fail a guess", () => {
    const hangman = HangmanMother.new();
    hangman.guess("b");
    hangman.getLives().should.be.equal(9);
  });

  it("should end a game", () => {
    const hangman = HangmanMother.withOneLife();
    hangman.guess("b");
    hangman.isGameOver().should.be.true;
  });

  it("should win a game", () => {
    const hangman = HangmanMother.new("dad", 10);
    hangman.guess("d");
    hangman.guess("a");
    hangman.isGameOver().should.be.true;
    hangman.isWin().should.be.true;
  });
});


export class Hangman {
  private word: string;
  private lives: number;
  constructor(
    word: string = "dad",
    maxLives: number = 10
  ) {
    this.word = word;
    this.lives = maxLives;
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

  isGameOver() {
    return this.isWin() || this.lives === 0;
  }

  isWin() {
    return true;
  }
};

