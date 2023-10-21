import assert from "assert";
import { AccountService } from "./AccountService";
import { Printer } from "./Printer";

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
    this.printer.print("");
  }

  private recordTransaction(amount: number) {
    this._transactions.push({ amount, date: new Date() });
  }

}

interface Transaction {
  amount: number;
  date: Date;
}