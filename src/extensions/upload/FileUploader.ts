import {filter} from 'rxjs/operators';
import Plugin from '../../core/Plugin';
import BitmapImage from '../../scene/BitmapImage';
import Canvas from '../../scene/Canvas';
import FileReceiver from './FileReceiver';
import FileReceiverFactory from './FileReceiverFactory';
import MimeValidator from './validator/MimeValidator';
import Validator from './validator/Validator';

export default class FileUploader implements Plugin {

  private readonly factory: FileReceiverFactory = new FileReceiverFactory();

  private readonly validator: Validator = new MimeValidator(['image/jpeg', 'image/png', 'image/gif']);

  private readonly receivers: FileReceiver[];

  public constructor(elements: HTMLElement[]) {
    this.receivers = elements.map((element: HTMLElement) => this.factory.getFileReceiver(element));
  }

  public disabled(): void {
    this.receivers.forEach((receiver: FileReceiver) => receiver.onDestroy());
  }

  public enabled(canvas: Canvas): void {
    const reader: FileReader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target && event.target.result) {
            canvas.addDrawable(FileUploader.getBitmapImage(event.target.result));
        }
    };

    this.receivers.forEach((receiver: FileReceiver) => {
      receiver.onCreate();
      receiver.file$
          .pipe(filter((file: File) => this.validator.validate(file)))
          .subscribe(reader.readAsDataURL);
    });
  }

  private static getBitmapImage(result: string | ArrayBuffer): BitmapImage {
      const image = new Image();
      image.src = result as string;

      return new BitmapImage(image);
  }

}
