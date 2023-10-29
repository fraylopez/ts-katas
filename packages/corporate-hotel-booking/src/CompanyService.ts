import assert from "assert";

export class CompanyService {
  private employeeId: Map<string, string[]> = new Map();
  addEmployee(companyId: string, employeeId: string) {
    assert(!this.employeeExists(employeeId), "Employee already exists");
    const employees = this.employeeId.get(companyId) || [];
    this.employeeId.set(companyId, [...employees, employeeId]);
  }

  private employeeExists(employeeId: string) {
    return Array.from(this.employeeId.values())
      .flatMap((employeeId) => employeeId)
      .includes(employeeId);
  }

}
