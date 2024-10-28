import * as sinon from "sinon";
import { assert } from "sinon";
import { BirthdayService } from "../src/birthdayService";
import { Probe } from "../src/Probe";
import * as  Mail from "nodemailer/lib/mailer";

let sandbox: sinon.SinonSandbox;
let loggerStub: sinon.SinonStub;

before(() => {
  sandbox = sinon.createSandbox();
  loggerStub = sandbox.stub(Probe, "log");
});

afterEach(() => {
  sandbox.reset();
});

it.skip("should be green when the refactor is done", () => {
  BirthdayService.main("some args");
  assert.notCalled(loggerStub);
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

it("should attempt to send an email", () => {
  BirthdayService.main("some args");
  assert.calledWith(loggerStub, "Sending email");
});

it("should send the email", async () => {
  mockMailService();
  await BirthdayService.main("some args");
  assert.calledWith(loggerStub, "Email sent");
});

function mockMailService() {
  sandbox.stub(Mail.prototype, "sendMail").resolves();
}

