import { Printer } from "./Printer";

export class ConsolePrinter implements Printer {
  print(statement: string) {
    throw new Error("Not implemented");
  }
}
