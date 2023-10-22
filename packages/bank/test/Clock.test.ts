import { expect } from "chai";
import { TimeUtils } from "../src/TimeUtils";

describe(`${TimeUtils.name}`, () => {

  it('should return date in format DD/MM/YYYY', () => {
    const date: string = TimeUtils.toFormat(new Date(), "DD/MM/YYYY");
    const expected = /^\d{2}\/\d{2}\/\d{4}$/;
    expect(expected.test(date)).true;
  });
});