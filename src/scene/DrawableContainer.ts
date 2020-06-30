import ContextResolver from '../core/ContextResolver';
import Bounds from '../geometry/Bounds';
import AbstractDrawable from './AbstractDrawable';
import { Drawable } from './Drawable';

export default class DrawableContainer extends AbstractDrawable {

  protected drawables: Drawable[] = [];

  public add(drawable: Drawable): void {
    this.drawables.push(drawable);
  }

  public addAll(drawables: Iterable<Drawable> | ArrayLike<Drawable>): void {
    const removables: Drawable[] = Array.from(drawables);
    removables.forEach((drawable: Drawable) => this.drawables.push(drawable));
  }

  public remove(drawable: Drawable): void {
    this.drawables = this.drawables.filter((item: Drawable) => item !== drawable);
  }

  public removeAll(drawables: Iterable<Drawable> | ArrayLike<Drawable>): void {
    const removables: Drawable[] = Array.from(drawables);
    this.drawables = this.drawables.filter((item: Drawable) => !removables.includes(item));
  }

  public clear(): void {
    while (this.drawables.length) {
      this.drawables.pop();
    }
  }

  public draw(resolver: ContextResolver): void {
    this.drawables.forEach((drawable: Drawable) => drawable.draw(resolver));
  }

  public getBounds(): Bounds {
    return this.drawables
      .map((drawable: Drawable) => drawable.getBounds())
      .reduce(DrawableContainer.calculateBounds, new Bounds());
  }

  private static calculateBounds(firstBounds: Bounds, otherBounds: Bounds): Bounds {
    const x: number = Math.min(firstBounds.minX, otherBounds.minX);
    const y: number = Math.min(firstBounds.minY, otherBounds.minY);
    const width: number = Math.max(firstBounds.width, otherBounds.width);
    const height: number = Math.max(firstBounds.height, otherBounds.height);

    return new Bounds(x, y, width, height);
  }
}
