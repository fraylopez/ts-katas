import { expect } from "chai";
import { Fridge } from "../src/Frigde";

describe(`${Fridge.name}`, () => {
  it('should start with no items', () => {
    const fridge = new Fridge();
    expect(fridge.count).equal(0);
  });

  it('should add items', () => {
    const fridge = new Fridge();
    fridge.add('apple');
    expect(fridge.count).equal(1);
  });

  it('should print items with lifespan', () => {
    const fridge = new Fridge();
    fridge.add('apple');
    expect(fridge.print()).to.be.equal("apple: 3 day(s) remaining");
  });

  it('should print two items with lifespan', () => {
    const fridge = new Fridge();
    fridge.add('apple');
    fridge.add('orange');
    expect(fridge.print()).to.be.equal(`apple: 3 day(s) remaining
    orange: 3 day(s) remaining`);
  });
});