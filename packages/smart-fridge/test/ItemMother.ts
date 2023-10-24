import { Item } from "../src/Frigde";


export class ItemMother
{

  public static apple(whenExpires: Date): Item
  {
    return new Item('apple', whenExpires);
  }

  public static orange(whenExpires: Date): Item
  {
    return new Item('orange', whenExpires);
  }
}
