import { Subject, Subscription } from 'rxjs';
import ContextResolver from '../core/ContextResolver';
import { OnCreate, OnDestroy } from '../core/hooks';
import CanvasEvent from '../event/CanvasEvent';
import EventDispatcher from '../event/EventDispatcher';
import Bounds from '../geometry/Bounds';
import Drawable from './Drawable';

export default abstract class AbstractDrawable implements Drawable, OnCreate, OnDestroy {

  public redraw$: Subject<AbstractDrawable> = new Subject();

  private dispatcher: EventDispatcher = new EventDispatcher();

  public invalidate(): void {
    this.redraw$.next(this);
  }

  public onCreate(): void {
    this.redraw$.complete();
    this.redraw$ = new Subject();
    this.dispatcher = new EventDispatcher();
  }

  public onDestroy(): void {
    this.redraw$.complete();
    this.dispatcher.complete();
  }

  public subscribe(type: string, handler: (event: CanvasEvent) => void): Subscription {
    return this.dispatcher.subscribe(type, handler);
  }

  public dispatchEvent(event: CanvasEvent): void {
    this.dispatcher.dispatch(event);
  }

  public abstract draw(resolver: ContextResolver): void;

  public abstract getBounds(): Bounds;

}
