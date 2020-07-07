import ContextResolver from '../core/ContextResolver';
import Drawable from './Drawable';
import DrawableContainer from './DrawableContainer';

export default class Stage extends DrawableContainer {

  public constructor(private readonly resolver: ContextResolver) {
    super();
  }

  public add(drawable: Drawable): void {
    super.add(drawable);
    // TODO: Do something smarter to draw these.
    drawable.draw(this.resolver);
  }

}
