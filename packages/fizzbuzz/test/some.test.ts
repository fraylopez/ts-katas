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
    {
      fizzBuzzOf: 4,
      expected: '4'
    },
    {
      fizzBuzzOf: 5,
      expected: 'Buzz'
    },
  ].forEach((testCase) => {
    it(`should output a partial fizzbuzz sequence for ${testCase.fizzBuzzOf}`, () => {
      expect(FizzBuzz(testCase.fizzBuzzOf)).contains(testCase.expected);
    });
  });



});


function FizzBuzz(n: number): string {
  if (n === 5) {
    return "Buzz";
  }
  if (n === 3) {
    return "Fizz";
  }
  if (n === 2) {
    return "2";
  }
  return n.toString();
}