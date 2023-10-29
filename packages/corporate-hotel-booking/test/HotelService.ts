import assert from "assert";
import { Hotel } from "./Hotel";

export class HotelService {

    private readonly hotels: Hotel[] = [];

    addHotel(id: string, name: string) {
        assert(!this.hotels.find(hotel => hotel.id === id), "Hotel already exists");
        this.hotels.push({ id, name, rooms: new Map() });
    }

    findHotelBy(hotelId: string) {
        return this.hotels.find(hotel => hotel.id === hotelId);
    }
    setRoom(hotelId: string, numRooms: number, roomType: string) {
        const hotel = this.findHotelBy(hotelId);
        assert(hotel, "Hotel does not exist");
        
        hotel!.rooms.set(roomType, numRooms);
    }
}


