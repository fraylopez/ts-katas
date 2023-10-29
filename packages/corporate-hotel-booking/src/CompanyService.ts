export class CompanyService {
  private employeeId!: string;
  addEmployee(companyId: string, employeeId: string) {
    if (this.employeeId === employeeId) {
      throw new Error("Employee already exists");
    }
    this.employeeId = employeeId;
  }

}
