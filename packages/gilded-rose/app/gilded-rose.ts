import { Item } from "./Item";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (!this.equalsItemName(i, 'Aged Brie') && !this.equalsItemName(i, 'Backstage passes to a TAFKAL80ETC concert')) {
        if (this.items[i].quality > 0) {
          if (!this.equalsItemName(i, 'Sulfuras, Hand of Ragnaros')) {
            this.decreaseItemQuality(i);
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.increaseItemQuality(i);
          if (this.equalsItemName(i, 'Backstage passes to a TAFKAL80ETC concert') ) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.increaseItemQuality(i);
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.increaseItemQuality(i);
              }
            }
          }
        }
      }
      if (!this.equalsItemName(i, 'Sulfuras, Hand of Ragnaros')) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (!this.equalsItemName(i, 'Backstage passes to a TAFKAL80ETC concert')) {
            if (this.items[i].quality > 0) {
              if (!this.equalsItemName(i, 'Sulfuras, Hand of Ragnaros')) {
                this.decreaseItemQuality(i);
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.increaseItemQuality(i);
          }
        }
      }
    }

    return this.items;
  }

  private equalsItemName(i: number, name: string) {
    return this.items[i].name == name;
  }

  private decreaseItemQuality(i: number) {
    this.items[i].quality = this.items[i].quality - 1;
  }

  private increaseItemQuality(i: number) {
    this.items[i].quality = this.items[i].quality + 1;
  }


}
