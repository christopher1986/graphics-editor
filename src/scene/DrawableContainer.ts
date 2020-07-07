import ContextResolver from '../core/ContextResolver';
import Bounds from '../geometry/Bounds';
import AbstractDrawable from './AbstractDrawable';
import Drawable from './Drawable';

export default class DrawableContainer extends AbstractDrawable {

  protected children: Drawable[] = [];

  public add(drawable: Drawable): void {
    this.children.push(drawable);
  }

  public addAll(drawables: Iterable<Drawable> | ArrayLike<Drawable>): void {
    const removables: Drawable[] = Array.from(drawables);
    removables.forEach((drawable: Drawable) => this.children.push(drawable));
  }

  public remove(drawable: Drawable): void {
    this.children = this.children.filter((item: Drawable) => item !== drawable);
  }

  public removeAll(drawables: Iterable<Drawable> | ArrayLike<Drawable>): void {
    const removables: Drawable[] = Array.from(drawables);
    this.children = this.children.filter((item: Drawable) => !removables.includes(item));
  }

  public clear(): void {
    while (this.children.length) {
      this.children.pop();
    }
  }

  public get drawables(): Drawable[] {
    return [ ...this.children ];
  }

  public draw(resolver: ContextResolver): void {
    this.children.forEach((drawable: Drawable) => drawable.draw(resolver));
  }

  public getBounds(): Bounds {
    return this.children
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
