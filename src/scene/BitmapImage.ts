import ContextResolver from '../core/ContextResolver';
import Bounds from '../geometry/Bounds';
import AbstractDrawing from './AbstractDrawing';

export default class BitmapImage extends AbstractDrawing {

  constructor(private image: HTMLImageElement) {
    super();
  }

  public draw(resolver: ContextResolver): void {
    const context: CanvasRenderingContext2D = resolver.getContext('2d');
    const bounds: Bounds = this.getBounds();

    context.drawImage(this.image, bounds.minX, bounds.minY, bounds.width, bounds.height);
  }

  public getBounds(): Bounds {
    return new Bounds(0, 0, this.image.width, this.image.height);
  }

}
