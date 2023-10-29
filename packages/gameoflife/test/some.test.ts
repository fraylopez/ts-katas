import { expect, should } from "chai";
import { GameOfLife } from "../src/GameOfLife";

should();
describe(`${GameOfLife.name}`, () => {
  it('should create a game', () => {
    GameOfLife.emptyBoard();
  });

  it('asdas', () => {
    GameOfLife.emptyBoard()
      .nextGen()
      .should.equal(GameOfLife.emptyBoard());
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