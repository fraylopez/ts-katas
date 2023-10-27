export class Item {

  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  expire() {
    this.quality = 0;
  }

  decreaseTimeToSell() {
    this.sellIn -= 1;
  }
  dueDateReached() {
    return this.sellIn < 0;
  }

  isFresh() {
    return this.quality > 0;
  }

  nonPerishable() {
    return this.name == 'Aged Brie';
  }
  agesGracefully()
  {
    return this.nonPerishable() || this.name == 'Backstage passes to a TAFKAL80ETC concert';
  }
}
