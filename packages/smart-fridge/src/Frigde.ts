export class Fridge {
  private readonly items: string[] = [];
  print(): any {
    return this.items.map(i => `${i}: 3 day(s) remaining`).join('\n');
  }
  count: number = 0;
  add(item: string) {
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