import { Bank } from "../src/Bank";

export class BankMother {
  static anEmptyBank(): Bank {
    return new Bank();
  }

  static aBankWithABalanceOf(balance: number): Bank {
    const bank = new Bank();
    bank.deposit(balance);
    return bank;
  }
}
