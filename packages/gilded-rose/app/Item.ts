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
    if (this.isTicket()) {
      this.handleBackstageTicketsItem();
    }
    else if (this.isAgedBrie()) {
      const delta = this.isSellInDateReached() ? 2 : 1;
      this.increaseItemQualityBy(delta);
    }
    else {
      const delta = this.isSellInDateReached() ? 2 : 1;
      this.decreaseQuality(delta);
    }
  }

  private increaseItemQualityBy(delta: number = 1) {
    this.quality = Math.min(50, this.quality + delta);
  }

  private handleBackstageTicketsItem() {
    if (this.isSellInDateReached()) {
      this.expire();
    }
    else {
      this.increaseItemQualityBy();
      if (this.sellIn < 10) {
        this.increaseItemQualityBy();
      }
      if (this.sellIn < 5) {
        this.increaseItemQualityBy();
      }
    }

  }

  private decreaseQuality(delta: number = 1) {
    if (this.name === 'Backstage passes to a TAFKAL80ETC concert') {
      // this.expire();
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
