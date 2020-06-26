export default class ContextResolver {

  public constructor(private canvas: HTMLCanvasElement) {}

  public getContext(contextId: '2d', options?: CanvasRenderingContext2DSettings): CanvasRenderingContext2D;
  public getContext(contextId: 'bitmaprenderer',
                    options?: ImageBitmapRenderingContextSettings): ImageBitmapRenderingContext;
  public getContext(contextId: 'webgl', options?: WebGLContextAttributes): WebGLRenderingContext;
  public getContext(contextId: 'webgl2', options?: WebGLContextAttributes): WebGL2RenderingContext;
  public getContext(contextId: string, options?: any): RenderingContext {
    const context = this.canvas.getContext(contextId, options);

    if (context === null) {
      throw new Error('Unable to obtain context from Canvas');
    }

    return context;
  }

}
