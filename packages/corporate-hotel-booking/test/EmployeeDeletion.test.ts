import {expect} from "chai";
import {CompanyService} from "../src/CompanyService";
import {BookingPolicyService} from "../src/BookingPolicyService";

describe(`EmployeeDeletion`, () => {
    it('should delete bookings and policies when deleting an employee', () => {
        const doc = new BookingPolicyService();
        doc.setEmployeePolicy("thisEmp", "suite");
        const sut = new CompanyService(doc);
        sut.addEmployee("companyId", "thisEmp");
        
        sut.deleteEmployee("companyId", "thisEmp");
        
        expect(doc.isBookingAllowed("thisEmp", "suite")).to.be.false;
    });
});
