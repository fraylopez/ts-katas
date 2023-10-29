import assert from "assert";
import {Hotel} from "./Hotel";

export class HotelService{
    
    private readonly hotels: Hotel[] = [];
    
    addHotel(id: string, name: string) {
        assert (!this.hotels.find(hotel => hotel.id === id), "Hotel already exists");
        this.hotels.push({id, name});
    }
}