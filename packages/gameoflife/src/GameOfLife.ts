import assert from "assert";

export class GameOfLife {
    constructor(board: boolean[][]) {

    }

    static emptyBoard() {
        return new GameOfLife([]);
    }

    nextGen(): GameOfLife {
        return GameOfLife.emptyBoard();
    }


}