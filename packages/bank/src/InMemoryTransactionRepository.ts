import { Transaction } from "./Transaction";
import { TransactionRepository } from "./TransactionRepository";

export class InMemoryTransactionRepository implements TransactionRepository {
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
