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
      expect(new FizzBuzz().run(testCase.fizzBuzzOf)).contains(testCase.expected);
    });
  });
  [
    {
      fizzBuzzOf: 2,
      expected: '1, 2'
    },

  ].forEach((testCase) => {
    it(`should output a full fizzbuzz sequence for ${testCase.fizzBuzzOf}`, () => {
      expect(new FizzBuzz().run(testCase.fizzBuzzOf)).contains(testCase.expected);
    });
  });



});

class FizzBuzz {
  constructor(
    private readonly fizz = 3,
    private readonly buzz = 5
  ) {

  }
  run(n: number): string {
    const result: string[] = [];
    for (let i = 1; i <= n; i++) {
      result.push(this.parse(i));
    }
    return result.join(", ");
  }

  private parse(n: number): string {
    const isDivisibleBy = (n, d) => n % d === 0;
    let result = "";
    if (isDivisibleBy(n, this.fizz)) {
      result += "Fizz";
    }
    if (isDivisibleBy(n, this.buzz)) {
      result += "Buzz";
    }
    if (result === "") {
      return n.toString();
    }
    return result;
  }
}