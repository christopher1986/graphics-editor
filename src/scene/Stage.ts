import ContextResolver from '../core/ContextResolver';
import { Drawable } from './Drawable';
import DrawableContainer from './DrawableContainer';

export default class Stage extends DrawableContainer {

  private readonly resolver: ContextResolver;

  public constructor(public readonly canvasElement: HTMLCanvasElement) {
    super();
    this.resolver = new ContextResolver(canvasElement);
  }

  public add(drawable: Drawable): void {
    super.add(drawable);
    // TODO: Do something smarter to draw these.
    drawable.draw(this.resolver);
  }

}
