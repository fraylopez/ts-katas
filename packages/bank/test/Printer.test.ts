import { expect } from "chai";
import { Printer } from "../src/Printer";

describe(`${Printer.name}`, () => {
  it("should print a statement", () => {
    const printer = new Printer();
    expect(printer.print("")).to.not.throw;
  });
});
