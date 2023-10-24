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
  constructor(
    readonly name: string,
    readonly lifespan: number
  ) { }
}

export class ItemMother{

  public static apple() : Item{
    return new Item('apple', 5);
  }

  public static orange() : Item{
    return new Item('orange', 5);
  }
}