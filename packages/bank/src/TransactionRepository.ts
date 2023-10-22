import { Transaction } from "./Transaction";


export interface TransactionRepository {
  recordTransaction(transaction: Transaction): void;
  getTransactions(): Transaction[];
}
