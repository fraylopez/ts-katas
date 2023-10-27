import { Item } from "./Item";
import { i } from "vitest/dist/types-0373403c";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  tickDay() {
    for (let i = 0; i < this.items.length; i++) {

      this.tickItem(i);
    }

    return this.items;
  }

  private tickItem(i: number) {
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

    if (this.isFresh(i)) {
      this.age(i);
    }
  }

  private nonPerishedLife(i: number) {
    if (this.isFresh(i) && !this.agesGracefully(i)) {
      this.age(i);
    }
    else {
      this.increaseItemQualityByOne(i);
      this.handleBackstageTicketsItem(i);
    }
  }

  private nonPerishable(i: number) {
    return this.items[i].nonPerishable();
  }

  private decreaseTimeToSell(i: number) {
    this.items[i].decreaseTimeToSell();
  }

  private expireItem(i: number) {
    this.items[i].expire();
  }

  private agesGracefully(i: number) {
    return this.items[i].agesGracefully();
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
    return this.items[i].dueDateReached();
  }

  private isFresh(i: number) {
    return this.items[i].isFresh();
  }

  private isLegendary(i: number) {
    return this.equalsItemName(i, 'Sulfuras, Hand of Ragnaros');
  }

  private equalsItemName(i: number, name: string) {
    return this.items[i].name == name;
  }

  private age(i: number) {

    if (this.nonPerishable(i)) {
      this.increaseItemQualityByOne(i);
    }
    else {
      if (this.equalsItemName(i, 'Backstage passes to a TAFKAL80ETC concert')) {
        this.expireItem(i);
      }
      else {
        this.items[i].quality = this.items[i].quality - 1;
      }
    }
  }

  private increaseItemQualityByOne(i: number) {
    if (this.items[i].quality < 50) {
      this.items[i].quality = this.items[i].quality + 1;
    }
  }


}
