import { i } from "vitest/dist/types-0373403c";

export class Item {

  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  decreaseTimeToSell() {
    this.sellIn -= 1;
  }
  dueDateReached() {
    return this.sellIn < 0;
  }

  isExpired() {
    return this.quality <= 0;
  }

  nonPerishable() {
    return this.name == 'Aged Brie';
  }

  agesGracefully() {
    return this.nonPerishable() || this.name == 'Backstage passes to a TAFKAL80ETC concert';
  }

  isLegendary() {
    return this.name == 'Sulfuras, Hand of Ragnaros';
  }

  age() {
    if (this.nonPerishable()) {
      this.increaseItemQualityByOne();
    }
    else {
      this.decreaseQuality();
      if (this.name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.expire();
      }
      else {
        this.quality -= 1;
      }
    }
  }

  private increaseItemQualityByOne() {
    if (this.quality < 50) {
      this.quality += 1;
    }
  }

  private decreaseQuality() {

  }

  private expire() {
    this.quality = 0;
  }
}
