import { expect } from "chai";
import { Fridge } from "../src/Frigde";

describe(`${Fridge.name}`, () => {
  it('should must hold items', () => {
    const fridge = new Fridge();
    expect(fridge.count).equal(0);
  });
});

