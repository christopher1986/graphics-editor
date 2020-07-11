import {FromEventTarget} from 'rxjs/internal/observable/fromEvent';

export default interface Listener<T> {
    attach(target: Element): void;
    detach(): void;
}
