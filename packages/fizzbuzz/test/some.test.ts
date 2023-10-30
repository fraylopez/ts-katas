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
  ].forEach((testCase) => {
    it(`should output a partial fizzbuzz sequence for ${testCase.fizzBuzzOf}`, () => {
      expect(FizzBuzz(testCase.fizzBuzzOf)).contains(testCase.expected);
    });
  });



});


function FizzBuzz(n: number): string {
  let result = "";
  if (n % 3 === 0) {
    result += "Fizz";
  }
  if (n % 5 === 0) {
    result += "Buzz";
  }
  if (result === "") {
    return n.toString();
  }
  return result;
}