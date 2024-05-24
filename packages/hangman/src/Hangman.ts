export class Hangman {
  private word: string;
  private lives: number;
  private guessedLetters: string[];
  constructor(
    word: string = "dad",
    maxLives: number = 10
  ) {
    this.word = word;
    this.lives = maxLives;
    this.guessedLetters = [];
  }
  wordLength() {
    return this.word.length;
  }
  guess(letter: string) {
    if (!this.word.includes(letter)) {
      this.lives--;
    }
    else {
      this.guessedLetters.push(letter);
    }
  }
  getLives() {
    return this.lives;
  }

  isGameOver() {
    return this.isWin() || this.lives === 0;
  }

  isWin() {
    return this.word.split("")
      .every(letter => this.guessedLetters.includes(letter));
  }
}
