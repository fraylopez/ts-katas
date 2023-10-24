import { Item } from "../src/Frigde";
import { Now } from "./Now";

export class ItemMother
{
  public static apple(timeToExpireFromNow: number = 5): Item
  {
    const expirationDate = Now.getTime() + timeToExpireFromNow * 24 * 3600 * 1000;
    return new Item('apple', new Date(expirationDate));
  }

  public static orange(timeToExpireFromNow: number = 5): Item
  {
    const expirationDate = Now.getTime() + timeToExpireFromNow * 24 * 3600 * 1000;
    return new Item('orange', new Date(expirationDate));
  }
}
