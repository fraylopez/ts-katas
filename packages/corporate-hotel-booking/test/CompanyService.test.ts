import { expect } from "chai";
import { CompanyService } from "../src/CompanyService";

describe('Commmsadasd', () => {
  it('add an employee to a company', () => {
    new CompanyService()
      .addEmployee("companyId", "employeeId");
  });

  it('should fail on employee duplication', () => {
    const service = new CompanyService();
    service.addEmployee("companyId", "employeeId");
    expect(() => service.addEmployee("companyId", "employeeId"))
      .to.throw();
  });
});

