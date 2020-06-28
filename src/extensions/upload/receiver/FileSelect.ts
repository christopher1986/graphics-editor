import AbstractFileReceiver from './AbstractFileReceiver';

export default class FileSelect extends AbstractFileReceiver {

    public constructor(private element: HTMLInputElement) {
        super();
    }

    public onCreate() {
        super.onCreate();
        this.element.addEventListener('change', this.onFileSelect.bind(this), false);
    }

    public onDestroy() {
        super.onDestroy();
        this.element.removeEventListener('change', this.onFileSelect, false);
    }

    private onFileSelect(event: Event): void {
        const target: HTMLInputElement = event.target as HTMLInputElement;
        const files: File[] = (target.files) ? Array.from(target.files) : [];
        files.forEach((file: File) => this._file$.next(file));
        event.preventDefault();
    }

}
