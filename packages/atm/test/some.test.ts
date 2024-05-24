import { expect, should } from "chai";

should();
describe("ATM", () => {

  it("should return 500 as [500]", () => {
    const atm = new ATM();
    expect(atm.withdraw(500)).to.be.eql([500]);
  });

  it("should return a 501 as 500,1 ", () => {
    const atm = new ATM();
    expect(atm.withdraw(501)).to.be.eql([500, 1]);
  });

  it("should return  1000 as 500,500 ", () => {
    const atm = new ATM();
    expect(atm.withdraw(1000)).to.be.eql([500, 500]);
  });

  it("should return 1234 as 500,500,200,20,10,2,2 ", () => {
    const atm = new ATM();
    expect(atm.withdraw(1234)).to.be.eql([500, 500, 200, 20, 10, 2, 2]);
  });

  it("should return a 1725€ as 500,500,500,200,20,5 ", () => {
    const atm = new ATM();
    expect(atm.withdraw(1725)).to.be.eql([500, 500, 500, 200, 20, 5]);
  });

  it("should return a 0€ as empty array", () => {
    const atm = new ATM();
    expect(atm.withdraw(0)).to.be.eql([]);
  });

  it("should run out off notes", () => {
    const atm = new ATM({
      500: 2,
      200: 10,
    });

    expect(atm.withdraw(1600)).to.be.eql([500, 500, 200, 200, 200]);
  });
});


class ATM {
  private stock: { [key: number]: number; };
  constructor(stock?: { [key: number]: number; }) {
    this.stock = stock || {
      500: 10,
      200: 10,
      100: 10,
      50: 10,
      20: 10,
      10: 10,
      5: 10,
      2: 10,
      1: 10,
    };

  }

  withdraw(amount: number, current: number[] = []): number[] {
    if (amount > 0) {
      const bill = this.bills.find(b => b <= amount);
      if (bill) {
        this.stock[bill]--;
        current = [...current, bill];
        return this.withdraw(amount - bill, current);
      }
    }
    return current;
  }

  private get bills(): number[] {
    return Object.keys(this.stock)
      .map(Number)
      .sort((a, b) => b - a)
      .filter(b => this.stock[b] > 0);
  }

};
