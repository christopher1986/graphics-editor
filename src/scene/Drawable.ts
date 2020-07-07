import ContextResolver from '../core/ContextResolver';
import EventTarget from '../event/EventTarget';
import Bounds from '../geometry/Bounds';

export default interface Drawable extends EventTarget {
  draw(resolver: ContextResolver): void;

  invalidate(): void;

  getBounds(): Bounds;
}
