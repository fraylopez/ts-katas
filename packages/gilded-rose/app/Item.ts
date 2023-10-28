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
      this.increaseItemQualityBy();
      return;
    }
    else {
      this.decreaseQuality();
    }
  }

  private decreaseTimeToSell() {
    this.sellIn -= 1;
    if (this.isSellInDateReached()) {
      if (this.isAgedBrie()) {
        this.increaseItemQualityBy();
      }
      else {
        this.decreaseQuality();
      }
    }
  }
  private increaseItemQualityBy(delta: number = 1) {
    if (this.quality < 50) {
      this.quality += delta;
    }
  }

  private handleBackstageTicketsItem() {
    this.increaseItemQualityBy();
    if (this.sellIn < 11) {
      this.increaseItemQualityBy();
    }
    if (this.sellIn < 6) {
      this.increaseItemQualityBy();
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
