import Canvas from '../scene/Canvas';

export default interface Plugin {

  enabled(canvas: Canvas): void;

  disabled(): void;

}
