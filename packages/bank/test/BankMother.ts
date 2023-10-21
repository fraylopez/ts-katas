import { Bank } from "../src/Bank";
import { PrinterMother } from "./PrinterMother";
import { AccountService } from "./acceptance.test";

export class BankMother {
  static anEmptyBank(): Bank {
    return new Bank(PrinterMother.aPrinter());
  }

  static aBankWithABalanceOf(balance: number): Bank {
    const bank = new Bank(PrinterMother.aPrinter());
    bank.deposit(balance);
    return bank;
  }
}