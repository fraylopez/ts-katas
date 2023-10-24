import assert from "assert";
import { join } from "path";

export class Fridge {
  count: number = 0;
  private readonly items: Map<Item, Date> = new Map();
  constructor(private readonly clock: () => Date) {

  }
  print(): any {
    return Array.from(this.items.keys())
      .map(i =>
        i.isExpired(this.clock()) ?
          `EXPIRED: ${i.name}` :
          `${i.name}: ${this.getTimeToExpire(i)} day(s) remaining`).join('\n');
  }
  add(item: Item, now: Date) {
    this.open();
    this.items.set(item, now);
    this.count++;
  }

  getTimeToExpire(item: Item): number {
    const now = this.items.get(item);
    assert(now, "Item not found");
    return item.timeToExpire(now);
  }

  private open() {
    this.items.forEach((_, item) => {
      item.degrade();
    });
  }
}


export class Item {

  private opened: boolean;
  constructor(
    readonly name: string,
    private expiration: Date,
  ) {
    this.opened = false;
  }

  static fromDate(name: string, date: Date): Item {
    return new Item(name, date);
  }

  timeToExpire(now: Date): number {
    const diff = this.expiration.getTime() - now.getTime();
    const days = diff / (1000 * 60 * 60 * 24);
    return Math.floor(days);
  }

  degrade() {
    const newExpirationDate = this.expiration.getTime() -
      this.getDegradationInHours() * 1000 * 60 * 60;
    this.expiration = new Date(newExpirationDate);
  }

  setOpened() {
    this.opened = true;
  }

  isExpired(now: Date): any {
    return this.expiration.getTime() - now.getTime() <= 0;
  }

  private getDegradationInHours(): number {
    return this.opened ? 5 : 1;
  }

}


export class FridgeMother {
  static aFridge(currentTime: Date): Fridge {
    return new Fridge(() => currentTime);
  }
}