import ContextResolver from '../core/ContextResolver';
import Plugin from '../core/Plugin';
import { Drawable } from './Drawable';
import Stage from './Stage';

export default class Canvas {

  private readonly drawables: Drawable[] = [];

  private readonly plugins: Plugin[] = [];

  private readonly resolver: ContextResolver;

  public constructor(public readonly canvas: HTMLCanvasElement, public readonly stage: Stage) {
    this.resolver = new ContextResolver(canvas);
  }

  public enablePlugin(plugin: Plugin): void {
    plugin.enabled(this);
  }

  public disablePlugin(plugin: Plugin): void {
    plugin.disabled();
  }

  public addDrawable(drawable: Drawable): void {
    this.drawables.push(drawable);
  }

}
