import assert from "assert";

export class GameOfLife {
    constructor(private readonly board: boolean[][]) {

    }

    static emptyBoard() {
        return new GameOfLife([]);
    }

    nextGen(): GameOfLife {
        return GameOfLife.emptyBoard();
    }
}