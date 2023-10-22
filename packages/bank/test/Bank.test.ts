import { expect } from "chai";
import { Bank } from "../src/Bank";
import { BankMother } from "./BankMother";
import sinon from "sinon";
import { ConsolePrinter } from "../src/ConsolePrinter";
import moment from "moment";

describe(`${Bank.name}`, () => {
  let sandbox: sinon.SinonSandbox;
  before(() => {
    sandbox = sinon.createSandbox();
  });
  afterEach(() => {
    sandbox.restore();
  });

  it("should be able to deposit money", () => {
    const bank = BankMother.anEmptyBank();
    bank.deposit(1000);
  });

  it("should be able to withdraw money", () => {
    const bank = BankMother.aBankWithABalanceOf(1000);
    bank.withdraw(500);
  });

  it("should not be able to withdraw more than the balance", () => {
    const bank = BankMother.aBankWithABalanceOf(1000);
    expect(() => bank.withdraw(5000)).throw("Insufficient funds");
  });

  it("should be able to print a statement", () => {
    const bank = BankMother.aBankWithABalanceOf(1000);
    expect(bank.printStatement()).to.not.throw;
  });

  it("should print a statement with the transactions", () => {
    const stubPrinter = sandbox.createStubInstance(ConsolePrinter);
    const bank = BankMother.anEmptyBank({ printer: stubPrinter });
    bank.deposit(1000);
    bank.printStatement();
    const expectedStatement = `
    Date || Amount || Balance
    ${moment().format("DD/MM/YYYY")} || 1000 || 1000
    `;
    const calledWith = stubPrinter.print.getCall(0).args[0];
    expect(calledWith.replace(/\s/g, '')).eq(expectedStatement.replace(/\s/g, ''));
  });
});;
