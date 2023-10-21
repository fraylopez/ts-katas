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
    throw new Error("Method not implemented.");
  }
  withdraw(amount: number): void {
    throw new Error("Method not implemented.");
  }
  printStatement(): void {
    throw new Error("Method not implemented.");
  }
}
