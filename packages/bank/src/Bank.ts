import assert from "assert";
import { AccountService } from "../test/acceptance.test";
import { ConsolePrinter } from "./ConsolePrinter";
import { Printer } from "./Printer";

export class Bank implements AccountService {
  private _balance: number;
  private printer: Printer;
  constructor() {
    this._balance = 0;
    this.printer = new ConsolePrinter();
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
