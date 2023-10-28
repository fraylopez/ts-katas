import { Item } from "./Item";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  tickDay() {
    for (const item of this.items) {
      item.tick();
    }

    return this.items;
  }
}


/*

|.........|...|....|
10 ...........0....0  normal
10 ......20..30....0  backstage
10 ..........10...15  brie
10 ..........10...10  legendary

*/
