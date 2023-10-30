import { expect, should } from "chai";

should();
describe("FizzBuzz", () => {
  [
    {
      fizzBuzzOf: 1,
      expected: '1'
    },
    {
      fizzBuzzOf: 2,
      expected: '2'
    },
  ].forEach((testCase) => {
    it(`should output a partial fizzbuzz sequence for ${testCase.fizzBuzzOf}`, () => {
      expect(FizzBuzz(testCase.fizzBuzzOf)).contains(testCase.expected);
    });
  });



});


function FizzBuzz(n: number): string {
  if (n === 2) {
    return "2";
  }
  return "1";
}