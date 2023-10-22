import { expect } from "chai";
import { after, before } from "mocha";
import sinon, { SinonStubbedInstance } from "sinon";
import { BankMother } from "./BankMother";
import { AccountService } from "../src/AccountService";
import { Printer } from "../src/Printer";
import { ConsolePrinter } from "../src/ConsolePrinter";
import { SystemClock } from "../src/SystemClock";
import { Clock } from "../src/Clock";

describe('bank acceptance tests', () => {
  let bank: AccountService;
  let printer: SinonStubbedInstance<Printer>;
  let clock: SinonStubbedInstance<Clock>;
  let sandbox: sinon.SinonSandbox;
  before(() => {
    sandbox = sinon.createSandbox();
    printer = sandbox.createStubInstance<Printer>(ConsolePrinter);
    clock = sandbox.createStubInstance<Clock>(SystemClock);
    bank = BankMother.anEmptyBank({ printer, clock });
  });

  describe('Given a client makes a deposit of 1000 on 10-01-2012', () => {
    before(() => {
      clock.now.returns(new Date(2012, 0, 10));
      bank.deposit(1000);
    });
    describe('And a deposit of 2000 on 13-01-2012', () => {
      before(() => {
        clock.now.returns(new Date(2012, 0, 13));
        bank.deposit(2000);
      });
      describe('When they make a withdrawal of And a withdrawal of 500 on 14-01-2012', () => {
        before(() => {
          clock.now.returns(new Date(2012, 0, 14));
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
            const calledWith = printer.print.getCall(0).args[0];
            expect(calledWith.replace(/\s/g, '')).eq(expectedStatement.replace(/\s/g, ''));
          });
        });
      });
    });
  });
});
