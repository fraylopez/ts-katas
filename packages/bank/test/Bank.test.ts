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


  it("should not be able to withdraw more than the balance", () => {
    const bank = new Bank();
    bank.deposit(1000);
    expect(() => bank.withdraw(5000)).throw("Insufficient funds");
  });
});