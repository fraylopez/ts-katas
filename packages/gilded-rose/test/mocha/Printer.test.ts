import { Printer } from "../Printer";
import { expect } from "chai";

describe('Printer', () => {
  it('should print', () => {
    var sut = new Printer();
    sut.print("Hello World");
    expect(sut.getStatement()).equal("Hello World");
  });

  it('should print 2 lines', () => {
    var sut = new Printer();
    sut.print("Hello World");
    sut.print("Hello World 2");
    expect(sut.getStatement()).equal(
      `Hello World
Hello World 2`
    );
  });
});
