/**
 * The Ipoint represents the x, y coordinates in a two dimensional space.
 */
export interface IPoint {
  x: number;
  y: number;
}

/**
 * The Point class maintains the x, y coordinates in a two dimensional space.
 */
export default class Point implements IPoint {

  /**
   * The x coordinate of this point.
   */
  private _x: number = 0;

  /**
   * The y coordinate of this point.
   */
  private _y: number = 0;

  /**
   * Creates a new instance of the Point.
   *
   * @param [x] The x coordinate of the point.
   * @param [y] The y coordinate of the point.
   */
  public constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  /**
   * Set the x coordinate of this point.
   *
   * @param [x] The x coordinate of the point.
   */
  public set x(x: number) {
    this._x = x;
  }

  /**
   * Returns the x coordinate of this point.
   *
   * @return The x coordinate of the point.
   */
  public get x(): number {
    return this._x;
  }

  /**
   * Set the y coordinate of this point.
   *
   * @param [y] The y coordinate of the point.
   */
  public set y(y: number) {
    this._y = y;
  }

  /**
   * Returns the y coordinate of this point.
   *
   * @return The y coordinate of the point.
   */
  public get y(): number {
    return this._y;
  }

}
