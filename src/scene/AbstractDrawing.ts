import { Subject } from 'rxjs';
import ContextResolver from '../core/ContextResolver';
import { OnCreate, OnDestroy } from '../core/hooks';
import Bounds from '../geometry/Bounds';
import { Drawable } from './Drawable';

export default abstract class AbstractDrawing implements Drawable, OnCreate, OnDestroy {

  public redraw$: Subject<AbstractDrawing> = new Subject();

  public invalidate(): void {
    this.redraw$.next(this);
  }

  public onCreate(): void {
    this.redraw$.complete();
    this.redraw$ = new Subject();
  }

  public onDestroy(): void {
    this.redraw$.complete();
  }

  public abstract draw(resolver: ContextResolver): void;

  public abstract getBounds(): Bounds;

}
