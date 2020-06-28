import {Observable, Subject} from 'rxjs';
import FileReceiver from '../FileReceiver';

export default abstract class AbstractFileReceiver implements FileReceiver {

    protected _file$: Subject<File> = new Subject();

    public onCreate(): void {
        this._file$.complete();
        this._file$ = new Subject();
    }

    public onDestroy(): void {
        this._file$.complete();
    }

    public get file$(): Observable<File> {
        return this._file$;
    }

}
