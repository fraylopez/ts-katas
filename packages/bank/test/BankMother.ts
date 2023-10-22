import { AccountService } from "../src/AccountService";
import { Bank } from "../src/Bank";
import { Clock } from "../src/Clock";
import { Printer } from "../src/Printer";
import { ClockMother } from "./ClockMother";
import { PrinterMother } from "./PrinterMother";

export class BankMother {
  static anEmptyBank(printer?: Printer, clock?: Clock): AccountService {
    return new Bank(
      printer || PrinterMother.aPrinter(),
      clock || ClockMother.aClockAt(new Date())
    );
  }

  static aBankWithABalanceOf(balance: number, printer?: Printer): AccountService {
    const bank = this.anEmptyBank(printer);
    bank.deposit(balance);
    return bank;
  }

}