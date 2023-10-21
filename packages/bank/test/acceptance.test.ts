import { expect } from "chai";
import { after, before } from "mocha";
import sinon, { SinonSpy, SinonStubbedInstance, spy } from "sinon";
import { Bank } from "../src/Bank";
import { BankMother } from "./BankMother";
import { AccountService } from "../src/AccountService";
import { Printer } from "../src/Printer";
import { ConsolePrinter } from "../src/ConsolePrinter";

describe('bank acceptance tests', () => {
  let bank: AccountService;
  let printer: SinonStubbedInstance<Printer>;
  let sandbox: sinon.SinonSandbox;
  before(() => {
    sandbox = sinon.createSandbox();
    printer = sandbox.createStubInstance<Printer>(ConsolePrinter);
    bank = BankMother.anEmptyBank(printer);
  });

  describe('Given a client makes a deposit of 1000 on 10-01-2012', () => {
    before(() => {
      bank.deposit(1000);
    });
    describe('And a deposit of 2000 on 13-01-2012', () => {
      before(() => {
        bank.deposit(2000);
      });
      describe('When they make a withdrawal of And a withdrawal of 500 on 14-01-2012', () => {
        before(() => {
          bank.withdraw(500);
        });
        describe('When they print their bank statement', () => {
          after(() => {
            sinon.restore();
          });
          it('Then they would see:', () => {
            const expectedStatement = `
            Date       || Amount || Balance
            14/01/2012 || -500   || 2500
            13/01/2012 || 2000   || 3000
            10/01/2012 || 1000   || 1000
            `;

            bank.printStatement();
            sinon.assert.calledWith(printer.print, expectedStatement);
          });
        });
      });
    });
  });
});
