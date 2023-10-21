import { Bank } from "../src/Bank";
import { ConsolePrinter } from "../src/ConsolePrinter";
import { Printer } from "../src/Printer";

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

export class PrinterMother {
  static aPrinter(): Printer {
    return new ConsolePrinter();
  }
}