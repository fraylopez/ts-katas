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
    return this.lives > 0;
  }
}
