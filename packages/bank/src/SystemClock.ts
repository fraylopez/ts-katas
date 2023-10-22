import moment from "moment";
import { Clock } from "./Clock";
import { TimeUtils } from "./TimeUtils";

export class SystemClock implements Clock {
  now(): Date {
    return new Date();
  }
}
