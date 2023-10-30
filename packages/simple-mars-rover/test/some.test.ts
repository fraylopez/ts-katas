import { expect, should } from "chai";
import { SimpleMarsRover } from "../src/SimpleMarsRover";

should();
describe("SimpleMarsRover", () => {
  it('should start at 0,0', () => {
    expect(new SimpleMarsRover().run('')).contains('0:0');
  });

  it("should start facing north", () => {
    expect(new SimpleMarsRover().run('')).equals('0:0:N');
  });

  it("should turn left", () => {
    expect(new SimpleMarsRover().run('L')).equals('0:0:W');
  });

  it("should turn right", () => {
    expect(new SimpleMarsRover().run('R')).equals('0:0:E');
  });

  it("should move forward", () => {
    expect(new SimpleMarsRover().run('M')).equals('0:1:N');
  });

  it("should move forward twice", () => {
    const rover = new SimpleMarsRover();
    expect(rover.run('MM')).equals('0:2:N');
  });

  it("should turn left twice", () => {
    const rover = new SimpleMarsRover();
    expect(rover.run('LL')).equals('0:0:S');
  });

  it("should turn right and move", () => {
    const rover = new SimpleMarsRover();
    expect(rover.run('RM')).equals('1:0:E');
  });

  it("should wrap around the world", () => {
    const rover = new SimpleMarsRover();
    expect(rover.run('LM')).equals('9:0:W');
  });

});


