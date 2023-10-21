import { expect } from "chai";
import { ConsolePrinter } from "../src/ConsolePrinter";

describe(`${ConsolePrinter.name}`, () => {
  it("should print a statement", () => {
    const printer = new ConsolePrinter();
    expect(printer.print("")).to.not.throw;
  });
});
