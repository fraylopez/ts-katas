import { expect } from 'chai';
import { GildedRose, Item } from "../../app/gilded-rose";
import { output } from "./output";
import { Printer } from "../Printer";
import { GoldenMasterTextTest } from '../GoldenMasterTextTest';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('fixme');
  });

  it('asdasd', () => {
    const currentOutput = `
    -------- day 0 --------
    name, sellIn, quality
    +5 Dexterity Vest 10 20
    Aged Brie 2 0
    Elixir of the Mongoose 5 7
    Sulfuras, Hand of Ragnaros 0 80
    Sulfuras, Hand of Ragnaros -1 80
    Backstage passes to a TAFKAL80ETC concert 15 20
    Backstage passes to a TAFKAL80ETC concert 10 49
    Backstage passes to a TAFKAL80ETC concert 5 49
    Conjured Mana Cake 3 6

    -------- day 1 --------
    name, sellIn, quality
    +5 Dexterity Vest 9 19
    Aged Brie 1 1
    Elixir of the Mongoose 4 6
    Sulfuras, Hand of Ragnaros 0 80
    Sulfuras, Hand of Ragnaros -1 80
    Backstage passes to a TAFKAL80ETC concert 14 21
    Backstage passes to a TAFKAL80ETC concert 9 50
    Backstage passes to a TAFKAL80ETC concert 4 50
    Conjured Mana Cake 2 5
    `;

    expect(output).to.equal(currentOutput);
  });

  it('sfgdfgdfdfd', () => {
    const printer = new Printer();
    const textTest = new GoldenMasterTextTest();
    textTest.run(printer);
    
    const currentOutput = printer.getStatement();
    expect(currentOutput).to.equal(output);
  });
});




