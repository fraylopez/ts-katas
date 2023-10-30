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
    {
      fizzBuzzOf: 3,
      expected: '1, 2, Fizz'
    },
    {
      fizzBuzzOf: 5,
      expected: '1, 2, Fizz, 4, Buzz'
    },
    {
      fizzBuzzOf: 15,
      expected: '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz'
    },

  ].forEach((testCase) => {
    it(`should output a full fizzbuzz sequence for ${testCase.fizzBuzzOf}`, () => {
      expect(new FizzBuzz().run(testCase.fizzBuzzOf)).contains(testCase.expected);
    });
  });
});

class FizzBuzz {
  private matches: { [key: number]: string; };
  constructor(
    fizz: number = 3,
    buzz: number = 5
  ) {
    this.matches = {
      [fizz]: "Fizz",
      [buzz]: "Buzz",
    };
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
    for (let match in this.matches) {
      if (isDivisibleBy(n, match)) {
        result += this.matches[match];
      }
    }
    if (result === "") {
      return n.toString();
    }
    return result;
  }
}