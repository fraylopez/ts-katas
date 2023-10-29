import { expect, should } from "chai";
import { GameOfLife } from "../src/GameOfLife";

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
});

// cells
// alive or dead
// finite board
// underpopulation
// overpopulation
// reproduction
// surviving
// cells out of bounds die