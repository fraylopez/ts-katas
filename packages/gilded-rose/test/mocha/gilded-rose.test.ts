import { expect } from 'chai';
import { GildedRose } from "../../app/gilded-rose";
import { Item } from "../../app/Item";
import { output } from "./output";
import { Printer } from "../Printer";
import { GoldenMasterTextTest } from '../GoldenMasterTextTest';
import { it } from "mocha";

describe('Gilded Rose', () => {
  it('expected output for 2 days', () => {
    const printer = new Printer();
    const textTest = new GoldenMasterTextTest(printer);
    const days = 2;

    textTest.run(days);

    expect(printer.getStatement()).to.equal(output);
  });

});




