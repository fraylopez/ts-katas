import { GildedRose } from '../app/gilded-rose';
import { Item } from "../app/Item";
import { Printer } from "./Printer";

export class GoldenMasterTextTest {

  private readonly items = [
    new Item("+5 Dexterity Vest", 10, 20),
    new Item("Aged Brie", 2, 0),
    new Item("Elixir of the Mongoose", 5, 7),
    new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    // this conjured item does not work properly yet
    new Item("Conjured Mana Cake", 3, 6)
  ];
  private readonly gildedRose: GildedRose;

  constructor(private readonly printer: Printer) {
    this.gildedRose = new GildedRose(this.items);
  }

  run(days: number = 2) {
    // if (process.argv.length > 2) {
    //   days = +process.argv[2];
    // }

    for (let i = 0; i < days; i++) {
      this.printer.print("-------- day " + i + " --------");
      this.printer.print("name, sellIn, quality");
      this.items.forEach(element => {
        this.printer.print(element.name + ' ' + element.sellIn + ' ' + element.quality);

      });
      this.printer.print();
      this.gildedRose.tickDay();
    }
  }
}
