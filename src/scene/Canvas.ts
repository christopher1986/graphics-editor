import { fromEvent, Observable } from 'rxjs';
import ContextResolver from '../core/ContextResolver';
import Plugin from '../core/Plugin';
import Drawable from './Drawable';
import Stage from './Stage';

export default class Canvas {

  private readonly plugins: Plugin[] = [];

  private readonly selected: Drawable[] = [];

  private readonly stage: Stage;

  public constructor(private readonly canvasElement: HTMLCanvasElement) {
    this.stage = new Stage(new ContextResolver(canvasElement));
  }

  public enablePlugin(plugin: Plugin): void {
    plugin.enabled(this);
  }

  public disablePlugin(plugin: Plugin): void {
    plugin.disabled();
  }

  public addDrawable(drawable: Drawable): void {
    this.stage.add(drawable);
  }

  public fromEvent(eventName: string): Observable<Event> {
    return fromEvent(this.canvasElement, eventName);
  }

}
