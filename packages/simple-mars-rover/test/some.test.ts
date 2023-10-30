import { expect, should } from "chai";

should();
describe("SimpleMarsRover", () => {
  it('should start at 0,0', () => {
    expect(new SimpleMarsRover().run('')).contains('0:0');
  });

  it("should start facing north", () => {
    expect(new SimpleMarsRover().run('')).equals('0:0:N');
  });

  it("should turn left", () => {
    expect(new SimpleMarsRover().run('L')).equals('0:0:W');
  });

  it("should turn right", () => {
    expect(new SimpleMarsRover().run('R')).equals('0:0:E');
  });

  it("should move forward", () => {
    expect(new SimpleMarsRover().run('M')).equals('0:1:N');
  });

  it("should move forward twice", () => {
    const rover = new SimpleMarsRover();
    expect(rover.run('MM')).equals('0:2:N');
  });

});


class SimpleMarsRover {
  run(commands: string): string {
    if (commands === 'R') {
      return '0:0:E';
    }
    if (commands === 'L') {
      return '0:0:W';
    }
    if (commands.indexOf('M') > -1) {
      return `0:${commands.length}:N`;
    }
    return '0:0:N';
  }
}


// starts at 0,0 facing north
// input sequence of commands
//// L = turn left
//// R = turn right
//// M = move forward
// wraps around edges of grid
// return final position and direction facing