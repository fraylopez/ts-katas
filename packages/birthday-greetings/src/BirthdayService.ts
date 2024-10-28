import { OurDate } from "./OurDate";
import { Employee } from "./Employee";
import * as fs from "fs";
import * as nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/smtp-transport";
import { EmailNotSentError } from "./EmailNotSentError";
import { Probe } from "./Probe";

export class BirthdayService {

    public sendGreetings(fileName: string, ourDate: OurDate, smtpHost: string, smtpPort: number) {
        const data = fs.readFileSync(fileName, { encoding: 'utf8' });
        Probe.log("Read data from file", data);
        return Promise.all(data.split(/\r?\n/)
            .map(
                async (str: string) => {
                    let employeeData = str.split(", ");
                    const employee = new Employee(employeeData[1], employeeData[0],
                        employeeData[2], employeeData[3]);
                    if (employee.isBirthday(ourDate)) {
                        const recipient = employee.getEmail();
                        const body = "Happy Birthday, dear %NAME%!".replace("%NAME%",
                            employee.getFirstName());
                        const subject = "Happy Birthday!";
                        await this.sendTheMessage(smtpHost, smtpPort, "sender@here.com", subject,
                            body, recipient);
                    }
                })
        );
    }

    private sendTheMessage(smtpHost: string, smtpPort: number, sender: string,
        subject: string, body: string, recipient: string) {
        Probe.log("Sending email");
        // Create a mail session
        const transport = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
        });

        // Construct the message
        const msg = {
            from: sender,
            to: recipient,
            subject: subject,
            text: body
        };

        // Send the message
        return this.sendMessage(msg, transport);
    }

    // made protected for testing :-(
    protected async sendMessage(msg: MailOptions, transport: nodemailer.Transporter) {
        try {
            await transport.sendMail(msg);
            Probe.log("Email sent");
        } catch (e) {
            Probe.log("Error sending email", e);
            throw new EmailNotSentError(e as Error);
        }
    }

    static async main(args: string) {
        Probe.log("Starting the application");
        const service = new BirthdayService();
        try {
            await service.sendGreetings(
                "employee_data.txt",
                new OurDate("2008/10/08"),
                "localhost",
                25
            );
        } catch (e) {
            console.log(e);
            Probe.log("Error", e);
        }
    }
}
