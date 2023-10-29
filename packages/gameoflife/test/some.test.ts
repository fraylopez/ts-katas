import { expect, should } from "chai";
import { GameOfLife } from "../src/GameOfLife";

should();
describe(`${GameOfLife.name}`, () => {
  it('should create a game', () => {
    GameOfLife.empty();
  });

  it('empty does not change', () => {
    GameOfLife.empty()
      .nextGen()
      .should.eql(GameOfLife.empty());
  });

  it('single cell dies', () => {
    const board = [
      [0, 0, 0], 
      [0, 1, 0],
      [0, 0, 0],
    ];
    GameOfLife.from(board)
      .nextGen()
      .should.eql(GameOfLife.empty());
  });

  it('change', () => {
    const board = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    GameOfLife.from(board)
      .nextGen()
      .should.not.eql(GameOfLife.from(board));
  });
  
  it('underpopulation with neighbours' , () => {
    const board = [
      [1, 1],
    ];
    GameOfLife.from(board)
      .nextGen()
      .should.eql(GameOfLife.empty());
  });
});

// underpopulation
// overpopulation
// reproduction
// surviving
// cells out of bounds die