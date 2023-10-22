import { Clock } from "../src/Clock";

export class TestClock implements Clock {
  private date: Date;
  constructor(date?: Date) {
    this.date = date || new Date();
  }
  now(): Date {
    return this.date;
  }
  setNow(date: Date): void {
    this.date.setTime(date.getTime());
  }
}
