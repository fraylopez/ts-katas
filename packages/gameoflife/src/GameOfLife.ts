import assert from "assert";

interface AliveCell {
    x: number;
    y: number;
}

export class GameOfLife {
    constructor(
        private readonly aliveCells: AliveCell[],
        private readonly width: number,
        private readonly height: number,
    ) { }

    static empty() {
        return new GameOfLife([], 0, 0);
    }

    static from(board: number[][]) {
        const aliveCells: AliveCell[] = [];
        for (let y = 0; y < board.length; y++) {
            const row = board[y];
            for (let x = 0; x < row.length; x++) {
                if (row[x]) {
                    aliveCells.push({ x, y });
                }
            }
        }
        return new GameOfLife(aliveCells, board.length, board[0].length);
    }

    nextGen(): GameOfLife {
        return GameOfLife.empty();
    }

    private aliveNeighboursCount(x: number, y: number): number {

    }
}