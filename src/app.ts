import FileUploader from './extensions/uploader/FileUploader';
import Canvas from './scene/Canvas';
import Stage from './scene/Stage';

const canvasElement: HTMLCanvasElement = document.getElementById('editor') as HTMLCanvasElement;
canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight;
const inputElement: HTMLElement[] = Array.from(document.querySelectorAll('input[type="file"]'));

const drawableArea: Canvas = new Canvas(canvasElement);
drawableArea.enablePlugin(new FileUploader(inputElement));

console.log(drawableArea);
