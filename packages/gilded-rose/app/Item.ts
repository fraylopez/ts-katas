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
  isDueDateReached() {
    return this.sellIn < 0;
  }

  isExpired() {
    return this.quality <= 0;
  }

  nonPerishable() {
    return this.name == 'Aged Brie';
  }

  agesGracefully() {
    return this.name == 'Aged Brie' || this.name == 'Backstage passes to a TAFKAL80ETC concert';
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
    }
  }

  increaseItemQualityByOne() {
    if (this.quality < 50) {
      this.quality += 1;
    }
  }

  private decreaseQuality() {
    if (this.name === 'Backstage passes to a TAFKAL80ETC concert') {
      this.expire();
    }
    else {
      this.decreaseQualityByOne();
    }
  }

  private decreaseQualityByOne() {
    if (this.quality > 0) {
      this.quality -= 1;
    }
  }


  private expire() {
    this.quality = 0;
  }
}
