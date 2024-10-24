import { expect, should } from "chai";
import * as sinon from "sinon";
import { BirthdayService } from "../src/birthdayService";
import { Logger } from "../src/Logger";

should();


let sandbox: sinon.SinonSandbox;
let loggerStub: sinon.SinonStub;

before(() => {
  sandbox = sinon.createSandbox();
  loggerStub = sandbox.stub(Logger, "log");
});

afterEach(() => {
  sandbox.restore();
});

it("should start the app", () => {
  BirthdayService.main("some args");
  loggerStub.calledWith("Starting the application").should.be.true;
});



