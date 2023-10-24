export class Fridge {
  print(): any
  {
    return "apple: 3 day(s) remaining";
  }
  count: number = 0;
  add(arg0: string) {
    this.count++;
  }
}
