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
    this.sellIn -= 1;
    const delta = 1;

    if (this.isTicket()) {
      this.handleBackstageTicketsItem();
    }
    else if (this.isAgedBrie()) {
      this.increaseItemQualityBy(delta);
    }
    else {
      this.decreaseQuality(delta);
    }

    if (this.isSellInDateReached()) {
      if (this.isAgedBrie()) {
        this.increaseItemQualityBy();
      }
      else {
        this.decreaseQuality();
      }
    }

  }

  private decreaseTimeToSell() {

  }
  private increaseItemQualityBy(delta: number = 1) {
    this.quality = Math.min(50, this.quality + delta);
  }

  private handleBackstageTicketsItem() {
    this.increaseItemQualityBy();
    if (this.sellIn < 10) {
      this.increaseItemQualityBy();
    }
    if (this.sellIn < 5) {
      this.increaseItemQualityBy();
    }

  }

  private decreaseQuality(delta: number = 1) {
    if (this.name === 'Backstage passes to a TAFKAL80ETC concert') {
      this.expire();
    }
    else {
      this.decreaseQualityBy(delta);

    }
  }

  private decreaseQualityBy(delta: number = 1) {
    this.quality = Math.max(0, this.quality - delta);
  }

  private expire() {
    this.quality = 0;
  }


}
