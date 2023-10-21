import { Transaction } from "./Transaction";

export interface Printer {
  print(transactions: Transaction[]): void;
}
