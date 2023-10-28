export class Item {

  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  tick() {
    if (this.isLegendary()) {
      return;
    }
    this.tickQuality();
    this.decreaseTimeToSell();
  }

  private isSellInDateReached() {
    return this.sellIn < 0;
  }

  private isTicket() {
    return this.name == 'Backstage passes to a TAFKAL80ETC concert';
  }
  private isAgedBrie() {
    return this.name == 'Aged Brie';
  }

  private isLegendary() {
    return this.name == 'Sulfuras, Hand of Ragnaros';
  }

  private tickQuality() {
    if (this.isTicket()) {
      this.handleBackstageTicketsItem();
      return;
    }
    if (this.isAgedBrie()) {
      this.increaseItemQualityByOne();
      return;
    }
    this.age();
  }

  private age() {
    if (this.isAgedBrie()) {
      this.increaseItemQualityByOne();
    }
    else {
      this.decreaseQuality();
    }
  }

  private decreaseTimeToSell() {
    this.sellIn -= 1;
    if (this.isSellInDateReached()) {
      this.age();
    }
  }
  private increaseItemQualityByOne() {
    if (this.quality < 50) {
      this.quality += 1;
    }
  }

  private handleBackstageTicketsItem() {
    this.increaseItemQualityByOne();
    if (this.sellIn < 11) {
      this.increaseItemQualityByOne();
    }
    if (this.sellIn < 6) {
      this.increaseItemQualityByOne();
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
