import {Observable, Subject} from 'rxjs';
import Listener from './Listener';

export default abstract class AbstractListener<T> implements Listener<T> {

    private destroy$: Subject<void> = new Subject();

    public attach(target: Element): void {
        this.destroy$ = new Subject();
        this.handle(target, this.destroy$);
    }

    public detach(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    protected abstract handle(target: Element, stop$: Observable<void>): void;

}
