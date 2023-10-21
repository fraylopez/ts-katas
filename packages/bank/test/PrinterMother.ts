import { Printer } from "../src/Printer";
import { Transaction } from "../src/Transaction";


export class PrinterMother {
  static aPrinter(): Printer {
    return new MockPrinter();
  }
}

class MockPrinter implements Printer {
  private readonly statements: string[] = [];
  print(transactions: Transaction[]): void {
    this.statements.push(...transactions.map(t => this.parseTransactions(t)));
  }

  private parseTransactions(transaction: Transaction): string {
    return `${transaction.date.toLocaleDateString()} | ${transaction.amount} `;
  }

  get statement(): string[] {
    return this.statements;
  }
}