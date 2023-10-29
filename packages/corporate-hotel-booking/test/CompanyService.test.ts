import { expect } from "chai";
import { CompanyService } from "../src/CompanyService";

describe(`${CompanyService.name}`, () => {
  it('add an employee to a company', () => {
    new CompanyService()
      .addEmployee("companyId", "employeeId");
  });

  it('should fail on employee duplication', () => {
    const service = new CompanyService();
    service.addEmployee("companyId", "employeeId");
    expect(() => service.addEmployee("otherCompanyId", "employeeId"))
      .to.throw();
  });

  it('should not fail on different employeeId', () => {
    const service = new CompanyService();
    service.addEmployee("companyId", "employeeId");
    service.addEmployee("companyId", "employeeId2");
  });

  it('should fail on employee duplication again', () => {
    const service = new CompanyService();
    service.addEmployee("companyId", "employeeId2");
    service.addEmployee("companyId", "employeeId");
    expect(() => service.addEmployee("otherCompanyId", "employeeId2"))
      .throw();
  });
});
