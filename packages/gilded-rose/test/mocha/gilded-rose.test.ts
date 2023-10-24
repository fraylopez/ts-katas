import { expect } from 'chai';
import { GildedRose, Item } from "../../app/gilded-rose";
import { output } from "./output";
import { Printer } from "../Printer";
import { GoldenMasterTextTest } from '../GoldenMasterTextTest';
import { it } from "mocha";

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('fixme');
  });
  it('expected output for 2 days', () => {
    const printer = new Printer();
    const textTest = new GoldenMasterTextTest(printer);
    const days = 2;

    textTest.run(days);

    expect(printer.getStatement()).to.equal(output);
  });
});




