import { clock } from "sinon";
import { AccountService } from "../src/AccountService";
import { Bank } from "../src/Bank";
import { Clock } from "../src/Clock";
import { InMemoryTransactionRepository } from "../src/InMemoryTransactionRepository";
import { Printer } from "../src/Printer";
import { TransactionRepository } from "../src/TransactionRepository";
import { ClockMother } from "./ClockMother";
import { PrinterMother } from "./PrinterMother";

export class BankMother {
  static anEmptyBank(dependencies?: { printer?: Printer, clock?: Clock, transactionRepo?: TransactionRepository; }): AccountService {
    return new Bank(
      dependencies?.printer || PrinterMother.aPrinter(),
      dependencies?.clock || ClockMother.aClockAt(new Date()),
      dependencies?.transactionRepo || new InMemoryTransactionRepository()

    );
  }

  static aBankWithABalanceOf(balance: number, printer?: Printer): AccountService {
    const bank = this.anEmptyBank({ printer });
    bank.deposit(balance);
    return bank;
  }

}