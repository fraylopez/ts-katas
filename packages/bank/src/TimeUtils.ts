import moment from "moment";


export class TimeUtils {
  static toFormat(date: Date, format: string): string {
    return moment(date).format(format);
  }
}
