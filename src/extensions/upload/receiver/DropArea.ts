import AbstractFileReceiver from './AbstractFileReceiver';

export default class DropArea extends AbstractFileReceiver {

    public constructor(private element: HTMLElement) {
        super();
    }

    public onCreate() {
        super.onCreate();
        this.element.addEventListener('dragover', this.onDrag.bind(this), false);
        this.element.addEventListener('drop', DropArea.onDrop.bind(this), false);
    }

    public onDestroy() {
        super.onDestroy();
        this.element.removeEventListener('dragover', this.onDrag, false);
        this.element.removeEventListener('drop', DropArea.onDrop, false);
    }

    private onDrag(event: DragEvent): void {
        const files: File[] = (event.dataTransfer) ? Array.from(event.dataTransfer.files) : [];
        files.forEach((file: File) => this._file$.next(file));
        event.preventDefault();
    }

    private static onDrop(event: DragEvent): void {
        event.preventDefault();

        if (event.dataTransfer) {
            event.dataTransfer.dropEffect = 'copy';
        }
    }

}
