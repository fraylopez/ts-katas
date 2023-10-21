import { AccountService } from "../test/acceptance.test";

export class Bank implements AccountService {
  private _balance: number;
  constructor() {
    this._balance = 0;
  }
  get balance() {
    return this._balance;
  }
  deposit(amount: number): void {
    this._balance += amount;
  }
  withdraw(amount: number): void {
    this._balance -= amount;
  }
  printStatement(): void {
    throw new Error("Method not implemented.");
  }
}
