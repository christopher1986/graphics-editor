import Plugin from '../core/Plugin';
import { Drawable } from './Drawable';
import Stage from './Stage';

export default class Canvas {

  private readonly drawables: Drawable[] = [];

  private readonly plugins: Plugin[] = [];

  public constructor(public readonly stage: Stage) {}

  public enablePlugin(plugin: Plugin): void {
    plugin.enabled(this);
  }

  public disablePlugin(plugin: Plugin): void {
    plugin.disabled();
  }

  public addDrawable(drawable: Drawable): void {
    this.stage.add(drawable);
  }

}
