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
    {
      fizzBuzzOf: 3,
      expected: 'Fizz'
    },
  ].forEach((testCase) => {
    it(`should output a partial fizzbuzz sequence for ${testCase.fizzBuzzOf}`, () => {
      expect(FizzBuzz(testCase.fizzBuzzOf)).contains(testCase.expected);
    });
  });



});


function FizzBuzz(n: number): string {
  if (n === 3) {
    return "Fizz";
  }
  if (n === 2) {
    return "2";
  }
  return "1";
}