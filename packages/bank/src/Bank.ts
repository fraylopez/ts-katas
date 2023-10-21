import assert from "assert";
import { AccountService } from "../test/acceptance.test";
import { Printer } from "./Printer";

export class Bank implements AccountService {
  private _balance: number;
  constructor(
    private readonly printer: Printer,
  ) {
    this._balance = 0;
  }
  get balance() {
    return this._balance;
  }
  deposit(amount: number): void {
    this._balance += amount;
  }
  withdraw(amount: number): void {
    assert(this._balance >= amount, "Insufficient funds");
    this._balance -= amount;
  }
  printStatement(): void {
    this.printer.print("");
  }
}
