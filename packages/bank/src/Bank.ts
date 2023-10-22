import assert from "assert";
import { AccountService } from "./AccountService";
import { Printer } from "./Printer";
import { Transaction } from "./Transaction";
import { Clock } from "./Clock";
import { TimeUtils } from "./TimeUtils";
import { InMemoryTransactionRepository } from "./InMemoryTransactionRepository";
import { TransactionRepository } from "./TransactionRepository";

export class Bank implements AccountService {
  private _balance: number;
  constructor(
    private readonly printer: Printer,
    private readonly clock: Clock,
    private readonly transactionRepository: TransactionRepository,
  ) {
    this._balance = 0;
  }

  deposit(amount: number): void {
    this._balance += amount;
    this.recordTransaction(amount);
  }
  withdraw(amount: number): void {
    assert(this._balance >= amount, "Insufficient funds");
    this._balance -= amount;
    this.recordTransaction(-amount);
  }
  printStatement(): void {
    this.printer.print(TransactionParser.parse(this.transactionRepository.getTransactions()));
  }

  private recordTransaction(amount: number) {
    this.transactionRepository.recordTransaction({ amount, date: this.clock.now(), balance: this._balance });
  }
}

class TransactionParser {
  static parse(transactions: Transaction[]): string {
    const header = `Date || Amount || Balance`;
    const body = transactions.map(transaction =>
      `${TimeUtils.toFormat(transaction.date, "DD/MM/YYYY")} || ${transaction.amount} || ${transaction.balance}`)
      .join("\n");
    return header + "\n" + body;
  }
}
