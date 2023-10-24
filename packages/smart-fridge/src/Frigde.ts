import assert from "assert";

export class Fridge {
  count: number = 0;
  private readonly items: Map<Item, Date> = new Map();
  print(): any {
    return Array.from(this.items.keys())
      .map(i =>
        `${i.name}: ${this.getTimeToExpire(i)} day(s) remaining`).join('\n');
  }
  add(item: Item, now: Date) {
    this.items.set(item, now);
    this.count++;
  }

  getTimeToExpire(item: Item): number {
    const now = this.items.get(item);
    assert(now, "Item not found");
    return item.timeToExpire(now);
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

  private getDegradationInHours(): number {
    return this.opened ? 5 : 1;
  }

}