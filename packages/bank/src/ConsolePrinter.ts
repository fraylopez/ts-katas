import { Printer } from "./Printer";
import { Transaction } from "./Transaction";

export class ConsolePrinter implements Printer {
  print(statement: string): void {
    console.log(statement);
  }
}
