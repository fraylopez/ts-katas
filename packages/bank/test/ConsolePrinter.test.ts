import { expect } from "chai";
import { ConsolePrinter } from "../src/ConsolePrinter";
import sinon from "sinon";
import { after } from "mocha";

describe(`${ConsolePrinter.name}`, () => {
  let sandbox: sinon.SinonSandbox;
  before(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should print a statement", () => {
    const printer = new ConsolePrinter();
    expect(printer.print("test")).to.not.throw;
  });

  it("should print a statement to console", () => {
    const spy = sandbox.spy(console, "log");
    const printer = new ConsolePrinter();
    printer.print("test");
    sinon.assert.calledWith(spy, "test");
  });
});
