export interface Hotel {
    id: string;
    name: string;
    rooms: Room[];
}

export interface Room {
    number: number;
    type: string;
}