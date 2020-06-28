import {Observable} from 'rxjs';
import {OnCreate, OnDestroy} from '../../core/hooks';

export default interface FileReceiver extends OnCreate, OnDestroy {

    readonly file$: Observable<File>;

}
