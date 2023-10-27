import { Item } from "./Item";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  tickDay() {
    for (const item of this.items) {
      this.tickItem(item);
    }

    return this.items;
  }

  private tickItem(item: Item) {
    if (item.isLegendary()) {
      return;
    }
    this.nonPerishedLife(item);
    item.decreaseTimeToSell();
    if (item.dueDateReached()) {
      this.afterDueDateReached(item);
    }
  }

  private afterDueDateReached(item: Item) {
    if (!item.isExpired()) {
      item.age();
    }
  }

  private nonPerishedLife(item: Item) {
    if (!item.agesGracefully()) {
      item.age();
    }
    else {
      this.ageGracefully(item);
    }
  }
  private ageGracefully(item: Item) {
    item.increaseItemQualityByOne();
    this.handleBackstageTicketsItem(item);
  }

  private handleBackstageTicketsItem(item: Item) {
    if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      if (item.sellIn < 11) {
        item.increaseItemQualityByOne();
      }
      if (item.sellIn < 6) {
        item.increaseItemQualityByOne();
      }
    }
  }
}


/*

|.........|...|....|
10 ...........0....0  normal
10 ......20..30....0  backstage
10 ..........10...15  brie
10 ..........10...10  legendary

*/
