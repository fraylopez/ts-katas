import { expect, should } from "chai";

should();
describe("SimpleMarsRover", () => {
  it('should start at 0,0', () => {
    expect(new SimpleMarsRover().run('')).contains('0,0');
  });
});


class SimpleMarsRover {
  run(commands: string): string {
    return '0,0';
  }
}


// starts at 0,0 facing north
// input sequence of commands
//// L = turn left
//// R = turn right
//// M = move forward
// wraps around edges of grid
// return final position and direction facing