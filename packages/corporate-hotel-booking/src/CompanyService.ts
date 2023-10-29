import assert from "assert";
import {BookingPolicyService} from "./BookingPolicyService";

export class CompanyService {
  constructor(private readonly policies?: BookingPolicyService) {
    
  }

  private employeeId: Map<string, string[]> = new Map();
  addEmployee(companyId: string, employeeId: string) {
    assert(!this.employeeExists(employeeId), "Employee already exists");
    const employees = this.employeeId.get(companyId) || [];
    this.employeeId.set(companyId, [...employees, employeeId]);
  }

  employeeExists(employeeId: string) {
    return Array.from(this.employeeId.values())
      .flatMap((employeeId) => employeeId)
      .includes(employeeId);
  }

  deleteEmployee(companyId: string, employeeId: string) {
    assert(this.employeeExists(employeeId), "Employee does not exist");
    const employees = this.employeeId.get(companyId) || [];
    this.employeeId.set(companyId, employees.filter((id) => id !== employeeId));
  }

}
