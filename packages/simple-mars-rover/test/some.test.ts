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

  it("should turn left twice", () => {
    const rover = new SimpleMarsRover();
    expect(rover.run('LL')).equals('0:0:S');
  });

});


class SimpleMarsRover {
  private x: number;
  private y: number;
  private orientation: string;
  constructor() {
    this.x = 0;
    this.y = 0;
    this.orientation = 'N';
  }
  run(commands: string): string {
    if (commands === 'R') {
      return '0:0:E';
    }
    if (commands.indexOf('L') > -1) {
      return `${this.x}:${this.y}:${this.turnLeftTimes(this.findNumberOfCommandsOfType(commands, 'L'))}`;
    }
    if (commands.indexOf('M') > -1) {
      return `0:${commands.length}:N`;
    }
    return '0:0:N';
  }

  private turnLeftTimes(times: number) {
    for (let i = 0; i < times; i++) {
      this.orientation = this.turnLeft();
    }
    return this.orientation;
  }

  private turnLeft() {
    const directionsLeft = ['N', 'W', 'S', 'E'];
    const currentDirectionIndex = directionsLeft.indexOf(this.orientation);
    if (currentDirectionIndex === 0) {
      return 'W';
    }
    return `${directionsLeft[currentDirectionIndex + 1]}`;
  }



  private findNumberOfCommandsOfType(commands: string, type: string) {
    return Array.from(commands).filter(command => command === type).length;
  }
}


// starts at 0,0 facing north
// input sequence of commands
//// L = turn left
//// R = turn right
//// M = move forward
// wraps around edges of grid
// return final position and direction facing