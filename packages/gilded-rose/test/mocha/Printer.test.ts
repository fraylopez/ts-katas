import { Printer } from "../Printer";
import { expect } from "chai";

describe('Printer', () => {
  it('should print', () => {
    var sut = new Printer();
    sut.print("Hello World");
    expect(sut.statements[0]).equal("Hello World");
  });
});
