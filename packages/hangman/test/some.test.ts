import { expect, should } from "chai";
should();
describe("Hangman", () => {

  it("should have a word of length 3", () => {
    new Hangman().wordLength().should.be.equal(3);
  });

  it("should have a word of length 4", () => {
    new Hangman("moon").wordLength().should.be.equal(4);
  });


});


class Hangman {
  constructor(private word: string = "cat") {
  }
  wordLength() {
    return this.word.length;
  }
}