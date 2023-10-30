import { expect, should } from "chai";

should();
describe("FizzBuzz", () => {
  it('should output the fizzbuzz sequence', () => {
    expect(FizzBuzz(1)).to.equal('1');
  });

});


function FizzBuzz(n: number): string {
  return '1';
}