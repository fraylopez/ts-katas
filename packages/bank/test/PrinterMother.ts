import { Printer } from "../src/Printer";


export class PrinterMother {
  static aPrinter(): Printer {
    return new MockPrinter();
  }
}

class MockPrinter implements Printer {
  private readonly statements: string[] = [];
  print(statement: string): void {
    this.statements.push(statement);
  }

  get statement(): string[] {
    return this.statements;
  }
}