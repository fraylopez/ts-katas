import { Printer } from "../src/Printer";
import { Transaction } from "../src/Transaction";


export class PrinterMother {
  static aPrinter(): Printer {
    return new MockPrinter();
  }
}

class MockPrinter implements Printer {
  private readonly _prints: string[] = [];
  print(statement: string): void {
    this._prints.push(statement);
  }

  private parseTransactions(transaction: Transaction): string {
    return `${transaction.date.toLocaleDateString()} | ${transaction.amount} `;
  }

  get prints(): string[] {
    return this._prints;
  }
}