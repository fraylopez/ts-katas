import { Item } from "./Item";
import { i } from "vitest/dist/types-0373403c";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {

      this.updateItemQuality(i);
    }

    return this.items;
  }

  private updateItemQuality(i: number) {
    if (this.isLegendary(i)) {
      return;
    }

    this.nonPerishedLife(i);
    this.decreaseTimeToSell(i);
    if (this.dueDateReached(i)) {
      this.afterDueDateReached(i);
    }
  }

  private afterDueDateReached(i: number) {
    if (this.nonPerishable(i)) {
      this.increaseItemQualityByOne(i);
    } else {
      if (this.isFresh(i)) {
        this.decreaseItemQuality(i);
      }
    }
  }

  private nonPerishedLife(i: number) {
    if (this.isFresh(i) && !this.agesGracefully(i)) {
      this.decreaseItemQuality(i);
    }
    else {
      this.increaseItemQualityByOne(i);
      this.handleBackstageTicketsItem(i);
    }
  }

  private nonPerishable(i: number) {
    return this.items[i].name == 'Aged Brie';
  }

  private decreaseTimeToSell(i: number) {
    this.items[i].sellIn = this.items[i].sellIn - 1;
  }

  private expireItem(i: number) {
    this.items[i].quality = 0;
  }

  private agesGracefully(i: number) {
    return this.equalsItemName(i, 'Aged Brie') || this.equalsItemName(i, 'Backstage passes to a TAFKAL80ETC concert');
  }

  private handleBackstageTicketsItem(i: number) {
    if (this.equalsItemName(i, 'Backstage passes to a TAFKAL80ETC concert')) {
      if (this.items[i].sellIn < 11) {
        this.increaseItemQualityByOne(i);
      }
      if (this.items[i].sellIn < 6) {
        this.increaseItemQualityByOne(i);
      }
    }
  }

  private dueDateReached(i: number) {
    return this.items[i].sellIn < 0;
  }

  private isFresh(i: number) {
    return this.items[i].quality > 0;
  }

  private isLegendary(i: number) {
    return this.equalsItemName(i, 'Sulfuras, Hand of Ragnaros');
  }

  private equalsItemName(i: number, name: string) {
    return this.items[i].name == name;
  }

  private decreaseItemQuality(i: number) {
    if (this.equalsItemName(i, 'Backstage passes to a TAFKAL80ETC concert')) {
      this.expireItem(i);
    }
    else {
      this.items[i].quality = this.items[i].quality - 1;
    }
  }

  private increaseItemQualityByOne(i: number) {
    if (this.items[i].quality < 50) {
      this.items[i].quality = this.items[i].quality + 1;
    }
  }


}
