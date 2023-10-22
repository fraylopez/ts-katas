import assert from "assert";
import { AccountService } from "./AccountService";
import { Printer } from "./Printer";
import { Transaction } from "./Transaction";
import { Clock } from "./Clock";
import { TimeUtils } from "./TimeUtils";

export class Bank implements AccountService {
  private _balance: number;
  private readonly transactionRepository: TransactionRepository;
  constructor(
    private readonly printer: Printer,
    private readonly clock: Clock,
  ) {
    this._balance = 0;
    this.transactionRepository = new InMemoryTransactionRepository();
  }

  deposit(amount: number): void {
    this._balance += amount;
    this.recordTransaction(amount);
  }
  withdraw(amount: number): void {
    assert(this._balance >= amount, "Insufficient funds");
    this._balance -= amount;
    this.recordTransaction(-amount);
  }
  printStatement(): void {
    this.printer.print(TransactionParser.parse(this.transactionRepository.getTransactions()));
  }

  private recordTransaction(amount: number) {
    this.transactionRepository.recordTransaction({ amount, date: this.clock.now(), balance: this._balance });
  }
}

class TransactionParser {
  static parse(transactions: Transaction[]): string {
    const header = `Date || Amount || Balance`;
    const body = transactions.map(transaction =>
      `${TimeUtils.toFormat(transaction.date, "DD/MM/YYYY")} || ${transaction.amount} || ${transaction.balance}`)
      .join("\n");
    return header + "\n" + body;
  }
}

interface TransactionRepository {
  recordTransaction(transaction: Transaction): void;
  getTransactions(): Transaction[];
}

class InMemoryTransactionRepository implements TransactionRepository {
  private _transactions: Transaction[];
  constructor() {
    this._transactions = [];
  }
  recordTransaction(transaction: Transaction): void {
    this._transactions.unshift(transaction);
  }
  getTransactions(): Transaction[] {
    return this._transactions;
  }
}