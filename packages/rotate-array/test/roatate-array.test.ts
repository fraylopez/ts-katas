import { expect } from "chai";


describe('tests', () => {
  it('should pass', () => {
    expect(rotate([1, 2, 3], 0)).to.be.deep.equal([1, 2, 3]);
    expect(rotate([1, 2, 3], 1)).to.be.deep.equal([3, 1, 2]);
    expect(rotate([1, 2, 3], 2)).to.be.deep.equal([2, 3, 1]);
    expect(rotate([1, 2, 3], -1)).to.be.deep.equal([2, 3, 1]);
    expect(rotate([1, 2, 3], -2)).to.be.deep.equal([3, 1, 2]);
    expect(rotate([1, 2, 3], -333)).to.be.deep.equal([1, 2, 3]);
    expect(rotate([1, 2, 3], -333)).not.to.be.deep.equal([1, 3, 3]);
  });

});

function rotate(array: number[], arg1: number): any {

  while (arg1 < 0) {
    arg1 += array.length;
  }
  new Array(arg1).fill(0).forEach(() => {
    array = rotateOne(array);
  });
  return array;

}

function rotateOne(array: number[]): number[] {
  return [array[array.length - 1], ...array.slice(0, array.length - 1)];
}

