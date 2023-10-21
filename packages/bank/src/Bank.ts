import assert from "assert";
import { AccountService } from "./AccountService";
import { Printer } from "./Printer";
import { Transaction } from "./Transaction";

export class Bank implements AccountService {
  private _balance: number;
  private _transactions: Transaction[];
  constructor(
    private readonly printer: Printer,
  ) {
    this._balance = 0;
    this._transactions = [];
  }
  get balance() {
    return this._balance;
  }

  get transactions() {
    return this._transactions;
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
    const header = "Date || Amount || Balance";
    const body = this.parseTransactions();
    const statement = `${header}\n${body}`;
    this.printer.print(statement);
  }

  private recordTransaction(amount: number) {
    this._transactions.push({ amount, date: new Date(), balance: this._balance });
  }

  private parseTransactions(): string {
    return this._transactions.map(t => this.parseTransaction(t)).join("\n");
  }

  private parseTransaction(transaction: Transaction): string {
    return `${transaction.date.toLocaleDateString()} || ${transaction.amount} || ${transaction.balance}`;
  }
}
