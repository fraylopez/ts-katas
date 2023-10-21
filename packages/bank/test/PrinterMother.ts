import { ConsolePrinter } from "../src/ConsolePrinter";
import { Printer } from "../src/Printer";

export class PrinterMother {
  static aPrinter(): Printer {
    return new DummyPrinter();
  }

  static aConsolePrinter(): Printer {
    return new ConsolePrinter();
  }
}

class DummyPrinter implements Printer {
  private readonly _prints: string[] = [];
  print(statement: string): void {
    this._prints.push(statement);
  }

  get prints(): string[] {
    return this._prints;
  }
}