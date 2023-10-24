import { expect } from "chai";
import { Fridge } from "../src/Frigde";

describe('dummy test', () => {
  it('Fridge must hold items', () => {
    const fridge = new Fridge();
    expect(fridge.count).equal(0);
  });
});

