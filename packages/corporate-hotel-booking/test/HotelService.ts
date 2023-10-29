import assert from "assert";
import { Hotel } from "./Hotel";

export class HotelService {

    private readonly hotels: Hotel[] = [];

    addHotel(id: string, name: string) {
        assert(!this.hotels.find(hotel => hotel.id === id), "Hotel already exists");
        this.hotels.push({ id, name, rooms: [] });
    }

    findHotelBy(hotelId: string) {
        return this.hotels.find(hotel => hotel.id === hotelId);
    }
    setRoom(hotelId: string, numRooms: number, roomType: string) {
        const hotel = this.findHotelBy(hotelId);
        hotel!.rooms.push({ number: numRooms, type: roomType });
    }
}


