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
    fridge.print();
  });


});

