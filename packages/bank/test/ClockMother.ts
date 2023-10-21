import { Clock } from "../src/Clock";
import { TestClock } from "./TestClock";

export class ClockMother {
  static aClock(): Clock {
    return new TestClock();
  }
  static aClockAt(date: Date): Clock {
    const clock = new TestClock();
    clock.setNow(date);
    return clock;
  }
}
