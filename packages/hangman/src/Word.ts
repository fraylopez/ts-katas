export class Word {
  private word: string;
  constructor(word: string) {
    this.word = word;
  }

  get length() {
    return this.word.length;
  }

  includes(letter: string) {
    return this.word.includes(letter);
  }

  isGuessed(guessedLetters: string[] = []) {
    return this.word.split("").every(letter => guessedLetters.includes(letter));
  }


}
