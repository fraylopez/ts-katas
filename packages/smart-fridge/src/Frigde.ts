export class Fridge {
  private readonly items: Item[] = [];
  print(): any {
    return this.items.map(i => `${i.name}: ${i.lifespan} day(s) remaining`).join('\n');
  }
  count: number = 0;
  add(item: Item) {
    this.items.push(item);
    this.count++;
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