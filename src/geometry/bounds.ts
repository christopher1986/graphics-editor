/**
 * The IBounds represents the location (x, y) and dimension (width x height) of an object.
 */
export interface IBounds {
  width: number;
  height: number;
  x: number;
  y: number;
}

/**
 * The Bounds class defines the location (x, y) and dimension (width x height) of an object.
 */
export default class Bounds implements IBounds {

  /**
   * The x coordinate of this bounds.
   */
  private _x: number = 0;

  /**
   * The y coordinate of this bounds.
   */
  private _y: number = 0;

  /**
   * The width of this bounds.
   */
  private _width: number = 0;

  /**
   * The height of this bounds.
   */
  private _height: number = 0;

  /**
   * Create a new Bounds instance.
   *
   * @param x - (optional) The x coordinate of the bounds, defaults to 0.
   * @param y  - (optional) The y coordindate of the bounds, defaults to 0.
   * @param width - (optional) The width of the bounds, defaults to 0.
   * @param height - (optional) The height of the bounds, defaults to 0.
   */
  public constructor(x = 0, y = 0, width = 0, height = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  /**
   * Set the x coordinate of this bounds.
   *
   * @param x -The x coordinate of the bounds.
   */
  public set x(x: number) {
    this._x = x;
  }

  /**
   * Returns the x coordinate of this bounds.
   *
   * @return The x coordinate of the bounds.
   */
  public get x(): number {
    return this._x;
  }

  /**
   * Set the y coordinate of this bounds.
   *
   * @param y - The y coordinate of the bounds.
   */
  public set y(y: number) {
    this._y = y;
  }

  /**
   * Returns the y coordinate of this bounds.
   *
   * @return The y coordinate of the bounds.
   */
  public get y(): number {
    return this._y;
  }

  /**
   * Set the width of this bounds.
   *
   * @param width - The width of the bounds.
   */
  public set width(width: number) {
    this._width = width;
  }

  /**
   * Returns the width of this bounds.
   *
   * @return The width of the bounds.
   */
  public get width(): number {
    return this._width;
  }

  /**
   * Set the height of this bounds.
   *
   * @param height - The height of the bounds.
   */
  public set height(height: number) {
    this._height = height;
  }

  /**
   * Returns the height of this bounds.
   *
   * @return The height of the bounds.
   */
  public get height(): number {
    return this._height;
  }

}
