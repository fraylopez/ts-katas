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
