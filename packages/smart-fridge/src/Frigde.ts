import assert from "assert";

export class Fridge {
  count: number = 0;
  private readonly items: Map<Item, Date> = new Map();
  print(): any {
    return Array.from(this.items.keys())
      .map(i =>
        `${i.name}: ${this.getTimeToExpire(i)} day(s) remaining`).join('\n');
  }
  add(item: Item, now?: Date) {
    this.items.set(item, now || new Date());
    this.count++;
  }

  getTimeToExpire(item: Item): number {
    const now = this.items.get(item);
    assert(now, "Item not found");
    return item.timeToExpire(now);
  }
}


export class Item {
  private expiration!: Date;
  constructor(
    readonly name: string,
    readonly lifespan: number
  ) { }

  static fromDate(name: string, date: Date): Item {
    const item = new Item(name, 5);
    item.expiration = date;
    return item;
  }

  timeToExpire(now: Date): number {
    const diff = this.expiration.getTime() - now.getTime();
    const days = diff / (1000 * 60 * 60 * 24);
    return Math.floor(days);
  }
}

export class ItemMother {

  public static apple(lifespan: number = 5): Item {
    return new Item('apple', lifespan);
  }

  public static orange(lifespan: number = 5): Item {
    return new Item('orange', lifespan);
  }
}