import ContextResolver from '../core/ContextResolver';
import Bounds from '../geometry/Bounds';

export interface Drawable {
  draw(resolver: ContextResolver): void;

  invalidate(): void;

  getBounds(): Bounds;
}
