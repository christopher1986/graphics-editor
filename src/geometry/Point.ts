/**
 * The Point class maintains the x, y coordinates in a two dimensional space.
 */
export default class Point {

  /**
   * Create a new Point instance.
   *
   * @param x - The x coordinate of the point.
   * @param y - The y coordinate of the point.
   */
  public constructor(public x: number = 0, public y: number = 0) {}

  public translate(x: number, y: number): Point {
    const newX: number = this.x + x;
    const newY: number = this.y + y;

    return new Point(newX, newY);
  }

}
