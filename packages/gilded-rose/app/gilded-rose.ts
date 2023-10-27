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


  private decreaseTimeToSell(i: number) {
    this.items[i].decreaseTimeToSell();
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
    return !this.items[i].isExpired();
  }

  private isLegendary(i: number) {
    return this.items[i].isLegendary();
  }

  private equalsItemName(i: number, name: string) {
    return this.items[i].name == name;
  }

  private age(i: number) {
    this.items[i].age();
  }

  private increaseItemQualityByOne(i: number) {
    if (this.items[i].quality < 50) {
      this.items[i].quality = this.items[i].quality + 1;
    }
  }


}
