import { Bank } from "../src/Bank";
import { Printer } from "../src/Printer";
import { PrinterMother } from "./PrinterMother";

export class BankMother {
  static anEmptyBank(printer?: Printer): Bank {
    return new Bank(printer || PrinterMother.aPrinter());
  }

  static aBankWithABalanceOf(balance: number, printer?: Printer): Bank {
    const bank = this.anEmptyBank(printer);
    bank.deposit(balance);
    return bank;
  }


