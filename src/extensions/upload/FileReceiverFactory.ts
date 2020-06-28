import FileReceiver from './FileReceiver';
import DropArea from './receiver/DropArea';
import FileSelect from './receiver/FileSelect';

export default class FileReceiverFactory {

    public getFileReceiver(element: HTMLElement): FileReceiver {
        if (element instanceof HTMLInputElement) {
            return new FileSelect(element);
        }

        return new DropArea(element);
    }

}
