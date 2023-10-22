import { AccountService } from "../src/AccountService";
import { Bank } from "../src/Bank";
import { Clock } from "../src/Clock";
import { InMemoryTransactionRepository } from "../src/InMemoryTransactionRepository";
import { Printer } from "../src/Printer";
import { TransactionRepository } from "../src/TransactionRepository";
import { ClockMother } from "./ClockMother";
import { PrinterMother } from "./PrinterMother";

export class BankMother {
  static anEmptyBank(printer?: Printer, clock?: Clock, transactionRepo?: TransactionRepository): AccountService {
    return new Bank(
      printer || PrinterMother.aPrinter(),
      clock || ClockMother.aClockAt(new Date()),
      transactionRepo || new InMemoryTransactionRepository()

    );
  }

  static aBankWithABalanceOf(balance: number, printer?: Printer): AccountService {
    const bank = this.anEmptyBank(printer);
    bank.deposit(balance);
    return bank;
  }

}