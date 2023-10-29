import {expect, should} from "chai";
import {GameOfLife} from "../src/GameOfLife";

should();
describe(`${GameOfLife.name}`, () => {
    it('should create a game', () => {
        GameOfLife.emptyBoard();
    });

    it('empty does not change', () => {
        GameOfLife.emptyBoard()
            .nextGen()
            .should.eql(GameOfLife.emptyBoard());
    });

    it('single cell dies', () => {
        const board = [
            [false, false, false],
            [false, true, false],
            [false, false, false],
        ];
        new GameOfLife(board)
            .nextGen()
            .should.eql(GameOfLife.emptyBoard());
    });

    it('change', () => {
        const board = [
            [false, false, false],
            [false, true, false],
            [false, false, false],
        ];
        new GameOfLife(board)
            .nextGen()
            .should.not.eql(new GameOfLife(board));
    });
});

// cells
// alive or dead
// finite board
// underpopulation
// overpopulation
// reproduction
// surviving
// cells out of bounds die