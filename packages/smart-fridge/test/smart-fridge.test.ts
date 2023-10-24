import { expect } from "chai";
import { Fridge, FridgeMother, Item } from "../src/Frigde";
import { ItemMother } from "./ItemMother";
import { Now, Tomorrow } from "./Now";

describe(`${Fridge.name}`, () => {
  it('should start with no items', () => {
    const fridge = FridgeMother.aFridge(Now);
    expect(fridge.count).equal(0);
  });

  it('should add items', () => {
    const fridge = FridgeMother.aFridge(Now);
    fridge.add(ItemMother.apple(5), Now);
    expect(fridge.count).equal(1);
  });

  it('should print items with lifespan', () => {
    const fridge = FridgeMother.aFridge(Now);
    fridge.add(Item.fromDate("apple", new Date(2020, 1, 4)), new Date(2020, 1, 1));
    expect(fridge.print()).to.be.equal("apple: 3 day(s) remaining");
  });

  it('should print two items with lifespan', () => {
    const fridge = FridgeMother.aFridge(Now);
    fridge.add(ItemMother.apple(), Now);
    fridge.add(ItemMother.orange(), Now);
    expect(fridge.print()).to.include("apple");
    expect(fridge.print()).to.include("orange");
  });

  it('should print apple with different lifespan', () => {
    const fridge = FridgeMother.aFridge(Now);
    const apple = ItemMother.apple();
    fridge.add(apple, Now);
    expect(fridge.print()).to.be.equal("apple: 5 day(s) remaining");
  });

  it('should print apple with less lifespan when door is opened', () => {
    const fridge = FridgeMother.aFridge(Now);
    fridge.add(ItemMother.orange(), Now);
    fridge.add(ItemMother.apple(), Now);
    expect(fridge.print()).to.contain("orange: 4 day(s) remaining");
  });

  it('should print apple expired', () => {
    const fridge = FridgeMother.aFridge(Now);
    fridge.add(ItemMother.apple(0), Now);
    expect(fridge.print()).to.contain("EXPIRED: apple");
  });
});

describe(`${Item.name}`, () => {
  it('should compute time to expire', () => {
    const item = Item.fromDate("apple", new Date(2020, 1, 6));
    expect(item.timeToExpire(new Date(2020, 1, 1))).to.be.equal(5);
  });

  it('items should degrade if sealed', () => {
    const item = Item.fromDate("apple", new Date(2020, 1, 6));
    item.degrade();
    expect(item.timeToExpire(new Date(2020, 1, 1))).to.be.equal(4);
  });

  it('items should degrade a full day if degraded 25 times if sealed', () => {
    const item = Item.fromDate("apple", new Date(2020, 1, 6));
    for (let i = 0; i < 25; i++) {
      item.degrade();
    }
    expect(item.timeToExpire(new Date(2020, 1, 1))).to.be.equal(3);
  });

  it('items should degrade a full day if degraded 5 times if open', () => {
    const item = Item.fromDate("apple", new Date(2020, 1, 6));
    item.setOpened();
    for (let i = 0; i < 5; i++) {
      item.degrade();
    }
    expect(item.timeToExpire(new Date(2020, 1, 1))).to.be.equal(3);
  });

  it('should expire items', () => {
    const item = Item.fromDate("apple", new Date(2020, 1, 6));
    item.setOpened();
    for (let i = 0; i < 5 * 5; i++) {
      item.degrade();
    }
    expect(item.isExpired(Now)).equal(true);
  });
});