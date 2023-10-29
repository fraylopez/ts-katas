import { expect } from "chai";
import { HotelService } from "./HotelService";

describe('hotel service', () => {
    it('if no hotels, should add an hotel without fail', () => {
        new HotelService().addHotel("1", "thisHotel");
    });

    it('if hotel id already exists, should throw an error', () => {
        const hotelService = new HotelService();
        hotelService.addHotel("1", "thisHotel");
        expect(() => hotelService.addHotel("1", "thatHotel")).to.throw();
    });

    it("should return the hotel with the given id", () => {
        const hotelService = new HotelService();
        hotelService.addHotel("1", "thisHotel");
        expect(hotelService.findHotelBy("1"))
            .to.deep.equal({ id: "1", name: "thisHotel", rooms: [] });
    });

    it("should add rooms to an hotel", () => {
        const hotelService = new HotelService();
        hotelService.addHotel("1", "thisHotel");
        hotelService.setRoom("1", 1, "suite");
        expect(hotelService.findHotelBy("1")!.rooms).length.greaterThan(0);
    });


});