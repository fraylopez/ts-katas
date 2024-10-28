import * as sinon from "sinon";
import { assert } from "sinon";
import { Probe } from "../src/Probe";
import * as  Mail from "nodemailer/lib/mailer";
import { expect } from "chai";
import { EmailNotSentError } from "../src/EmailNotSentError";
import { BirthdayService } from "../src/BirthdayService";

let sandbox: sinon.SinonSandbox;
let loggerStub: sinon.SinonStub;

before(() => {
  sandbox = sinon.createSandbox();
});

beforeEach(() => {
  loggerStub = sandbox.stub(Probe, "log");
});

afterEach(() => {
  sandbox.restore();
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

it("should attempt to send an email", async () => {
  await BirthdayService.main("some args");
  assert.calledWith(loggerStub, "Sending email");
});

it("should send the email", async () => {
  mockMailSent();
  await BirthdayService.main("some args");
  assert.calledWith(loggerStub, "Email sent");
});

it("should log an error if the email is not sent", async () => {
  mockMailNotSent();
  await BirthdayService.main("some args");
  assert.calledWith(loggerStub, "Error", sinon.match.instanceOf(EmailNotSentError));
});

function mockMailSent() {
  sandbox.stub(Mail.prototype, "sendMail")
    .resolves();
}

function mockMailNotSent() {
  sandbox.stub(Mail.prototype, "sendMail")
    .rejects(new Error("some error"));
}

