import Point from './Point';

/**
 * The Bounds class defines the location (x, y) and dimension (width x height) of an object.
 */
export default class Bounds {

  /**
   * Create a new Bounds instance.
   *
   * @param x - (optional) The x coordinate of the bounds, defaults to 0.
   * @param y  - (optional) The y coordindate of the bounds, defaults to 0.
   * @param width - (optional) The width of the bounds, defaults to 0.
   * @param height - (optional) The height of the bounds, defaults to 0.
   */
  public constructor(
    private readonly x: number = 0,
    private readonly y: number = 0,
    public readonly width: number = 0,
    public readonly height: number = 0) {}

    public get minX(): number {
      return this.x;
    }

    public get maxX(): number {
      return this.x + this.width;
    }

    public get minY(): number {
      return this.y;
    }

    public get maxY(): number {
      return this.y + this.height;
    }

    public isEmpty(): boolean {
      return this.width <= 0 || this.height <= 0;
    }

    public contains(point: Point): boolean {
      return (point.x >= this.minX && point.x <= this.maxX &&
              point.y >= this.minY && point.y <= this.maxY);
    }

    public intersection(bounds: Bounds): Bounds {
      const minX: number = Math.max(this.minX, bounds.minX);
      const minY: number = Math.max(this.minY, bounds.minY);
      const width: number = Math.min(this.maxX, bounds.maxX) - minX;
      const height: number = Math.min(this.maxY, bounds.maxY) - minY;

      return new Bounds(minX, minY, width, height);
    }

    public intersects(bounds: Bounds): boolean {
      if (this.isEmpty() || bounds.isEmpty()) {
        return false;
      }

      return (bounds.maxX > this.minX && bounds.maxY > this.minY &&
              bounds.minX < this.maxX && bounds.minY < this.maxY);
    }

}
