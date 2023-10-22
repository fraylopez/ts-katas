import assert from "assert";
import { AccountService } from "./AccountService";
import { Printer } from "./Printer";
import { Transaction } from "./Transaction";
import { Clock } from "./Clock";
import { TimeUtils } from "./TimeUtils";

export class Bank implements AccountService {
  private _balance: number;
  private _transactions: Transaction[];
  constructor(
    private readonly printer: Printer,
    private readonly clock: Clock,
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
    this._transactions.push({ amount, date: this.clock.now(), balance: this._balance });
  }

  private parseTransactions(): string {
    return this._transactions.map(t => this.parseTransaction(t)).join("\n");
  }

  private parseTransaction(transaction: Transaction): string {
    return `${TimeUtils.toFormat(transaction.date, "DD/MM/YYYY")} || ${transaction.amount} || ${transaction.balance}`;
  }
}
