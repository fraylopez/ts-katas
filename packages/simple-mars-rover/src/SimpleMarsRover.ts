export class SimpleMarsRover {
  private x: number;
  private y: number;
  private orientation: string;
  constructor(
    private readonly maxX: number = 9,
    private readonly maxY: number = 9,
  ) {
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
      this.move();
    }
  }

  private move() {
    const movements = {
      'N': [0, 1],
      'E': [1, 0],
      'S': [0, -1],
      'W': [-1, 0],
    };
    this.moveDelta(
      movements[this.orientation][0],
      movements[this.orientation][1]
    );
  }

  private moveDelta(x: number, y: number) {
    this.x = this.x + x;
    this.y = this.y + y;
    if (this.x < 0) {
      this.x = this.maxX;
    }
    if (this.x > this.maxY) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = this.maxY;
    }
    if (this.y > this.maxY) {
      this.y = 0;
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
