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
    {
      fizzBuzzOf: 15,
      expected: 'FizzBuzz'
    },
    {
      fizzBuzzOf: 30,
      expected: 'FizzBuzz'
    },
    {
      fizzBuzzOf: 33,
      expected: 'Fizz'
    },
  ].forEach((testCase) => {
    it(`should output a partial fizzbuzz sequence for ${testCase.fizzBuzzOf}`, () => {
      expect(FizzBuzz(testCase.fizzBuzzOf)).contains(testCase.expected);
    });
  });



});


function FizzBuzz(n: number): string {
  const isDivisibleBy = (n, d) => n % d === 0;
  let result = "";
  if (isDivisibleBy(n, 3)) {
    result += "Fizz";
  }
  if (isDivisibleBy(n, 5)) {
    result += "Buzz";
  }
  if (result === "") {
    return n.toString();
  }
  return result;
}