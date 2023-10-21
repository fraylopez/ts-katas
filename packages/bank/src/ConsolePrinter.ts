import { Printer } from "./Printer";
import { Transaction } from "./Transaction";

export class ConsolePrinter implements Printer {
  print(transactions: Transaction[]): void {
    throw new Error("Not implemented");
  }
}
