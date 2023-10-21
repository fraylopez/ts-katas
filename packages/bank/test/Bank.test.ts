import { expect } from "chai";
import { Bank } from "../src/Bank";

describe("Bank", () => {
  it("should be able to deposit money", () => {
    const bank = new Bank();
    bank.deposit(1000);
    expect(bank.balance).eq(1000);
  });

  it("should be able to withdraw money", () => {
    const bank = new Bank();
    bank.deposit(1000);
    bank.withdraw(500);
    expect(bank.balance).eq(500);
  });
});