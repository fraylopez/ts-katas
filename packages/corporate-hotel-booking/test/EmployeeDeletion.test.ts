import {expect} from "chai";
import {CompanyService} from "../src/CompanyService";
import {BookingPolicyService} from "../src/BookingPolicyService";
import {BookingService} from "../src/BookingService";

describe(`EmployeeDeletion`, () => {
    it('should delete booking policies when deleting an employee', () => {
        const doc = new BookingPolicyService();
        doc.setEmployeePolicy("thisEmp", "suite");
        const sut = new CompanyService(doc);
        sut.addEmployee("companyId", "thisEmp");

        sut.deleteEmployee("companyId", "thisEmp");

        expect(doc.isBookingAllowed("thisEmp", "suite")).to.be.false;
    });

    it('should delete bookings when deleting an employee', () => {
        const doc = new BookingService();
        doc.book("thisEmp", "hotelId", "suite", new Date(), new Date());
        const sut = new CompanyService(undefined, doc);
        sut.addEmployee("companyId", "thisEmp");

        sut.deleteEmployee("companyId", "thisEmp");

        expect(doc.bookingExists("thisEmp", "suite")).to.be.false;
    });
});
