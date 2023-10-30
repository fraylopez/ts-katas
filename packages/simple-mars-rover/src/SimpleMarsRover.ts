export class SimpleMarsRover {
  private x: number;
  private y: number;
  private orientation: string;
  constructor() {
    this.x = 0;
    this.y = 0;
    this.orientation = 'N';
  }
  run(commands: string): string {
    if (commands.indexOf('R') > -1) {
      this.turnRightTimes(this.findNumberOfCommandsOfType(commands, 'R'));
    }
    if (commands.indexOf('L') > -1) {
      this.turnLeftTimes(this.findNumberOfCommandsOfType(commands, 'L'));
    }
    if (commands.indexOf('M') > -1) {
      this.y = this.y + this.findNumberOfCommandsOfType(commands, 'M');
    }
    return `${this.x}:${this.y}:${this.orientation}`;
  }

  private turnLeftTimes(times: number) {
    for (let i = 0; i < times; i++) {
      this.orientation = this.turnLeft();
    }
    return this.orientation;
  }

  private turnRightTimes(times: number) {
    for (let i = 0; i < times; i++) {
      this.orientation = this.turnRight();
    }
    return this.orientation;
  }

  private turnLeft() {
    return this.turn(['N', 'W', 'S', 'E']);
  }

  private turnRight() {
    return this.turn(['N', 'E', 'S', 'W']);
  }

  private turn(directions: string[]) {
    const currentDirectionIndex = directions.indexOf(this.orientation);
    return `${directions[currentDirectionIndex + 1]}`;
  }

  private findNumberOfCommandsOfType(commands: string, type: string) {
    return Array.from(commands).filter(command => command === type).length;
  }
}
