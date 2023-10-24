export class Printer {
  readonly statements: string[];
  constructor() {
    this.statements = [];
  }
  print(string: string = "") {
    this.statements.push(string);
    console.log(string);
  }
}
