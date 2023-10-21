import { expect } from "chai";
import { Bank } from "../src/Bank";

describe("Bank", () => {
  it("should be able to deposit money", () => {
    const bank = BankMother.anEmptyBank();
    bank.deposit(1000);
    expect(bank.balance).eq(1000);
  });

  it("should be able to withdraw money", () => {
    const bank = BankMother.aBankWithABalanceOf(1000);
    bank.withdraw(500);
    expect(bank.balance).eq(500);
  });


  it("should not be able to withdraw more than the balance", () => {
    const bank = BankMother.aBankWithABalanceOf(1000);
    expect(() => bank.withdraw(5000)).throw("Insufficient funds");
  });

  it("should be able to print a statement", () => {
    const bank = BankMother.aBankWithABalanceOf(1000);
    expect(bank.printStatement()).to.not.throw;
  });
});

describe("Printer", () => {
  it("should print a statement", () => {
    const printer = new Printer();
    expect(printer.print("")).to.not.throw;
  });
});

class Printer {
  print(statement: string) {
  }
}

class BankMother {
  static anEmptyBank(): Bank {
    return new Bank();
  }

  static aBankWithABalanceOf(balance: number): Bank {
    const bank = new Bank();
    bank.deposit(balance);
    return bank;
  }
}