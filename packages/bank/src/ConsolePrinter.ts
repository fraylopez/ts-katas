import { Printer } from "./Printer";

export class ConsolePrinter implements Printer {
  print(statement: string): void {
    console.log(statement);
  }
}
