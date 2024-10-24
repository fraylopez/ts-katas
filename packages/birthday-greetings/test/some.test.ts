import * as sinon from "sinon";
import { assert } from "sinon";
import { BirthdayService } from "../src/birthdayService";
import { Logger } from "../src/Logger";

let sandbox: sinon.SinonSandbox;
let loggerStub: sinon.SinonStub;

before(() => {
  sandbox = sinon.createSandbox();
  loggerStub = sandbox.stub(Logger, "log");
});

afterEach(() => {
  sandbox.reset();
});

it("should start the app", () => {
  BirthdayService.main("some args");
  assert.calledWith(loggerStub, "Starting the application");
});

it("should load the txt file", () => {
  BirthdayService.main("some args");
  assert.calledWith(
    loggerStub,
    "Read data from file",
    sinon.match(
      (data: string) => data?.includes("Doe, John, 1982/10/08")
    )
  );
});

