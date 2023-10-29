import {expect} from "chai";
import {HotelService} from "./HotelService";

describe('hotel service', () => {
    it('if no hotels, should add an hotel without fail', () => {
        new HotelService().addHotel("1", "thisHotel");
    });

    it('if hotel id already exists, should throw an error', () => {
        const hotelService = new HotelService();
        hotelService.addHotel("1", "thisHotel");
        expect(() => hotelService.addHotel("1", "thatHotel")).to.throw();
    });
});