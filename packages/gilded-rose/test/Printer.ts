export class Printer {
  private readonly statements: string[];
  constructor() {
    this.statements = [];
  }
  print(string: string = "") {
    this.statements.push(string);
    console.log(string);
  }

  getStatement(): string {
    return `\n${this.statements.join("\n")}\n`;
  }
}
