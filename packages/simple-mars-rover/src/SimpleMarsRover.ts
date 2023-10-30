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
    for (let i = 0; i < commands.length; i++) {
      this.applyCommand(commands[i]);
    }
    return `${this.x}:${this.y}:${this.orientation}`;

  }

  private applyCommand(command: string) {
    if (command === 'R') {
      this.turnRight();
    }
    if (command === 'L') {
      this.turnLeft();
    }
    if (command === 'M') {
      this.y = this.y + 1;
    }
  }
  private turnLeft() {
    this.turn(['N', 'W', 'S', 'E']);
  }

  private turnRight() {
    this.turn(['N', 'E', 'S', 'W']);
  }

  private turn(directions: string[]) {
    const currentDirectionIndex = directions.indexOf(this.orientation);
    this.orientation = `${directions[currentDirectionIndex + 1]}`;
  }
}
