import { Transaction } from "./Transaction";

export interface Printer {
  print(statement: string): void;
}
