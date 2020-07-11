import {fromEvent, Observable} from 'rxjs';
import {map, switchMap, takeUntil} from 'rxjs/operators';
import Canvas from '../../../scene/Canvas';
import AbstractListener from './AbstractListener';

export default class DragListener extends AbstractListener<Canvas> {

    protected handle(target: Element, stop$: Observable<void>): void {
        const mouseMove$ = fromEvent<MouseEvent>(target, 'mousemove').pipe(takeUntil(stop$));
        const mouseDown$ = fromEvent<MouseEvent>(target, 'mousedown').pipe(takeUntil(stop$));
        const mouseUp$ = fromEvent<MouseEvent>(target, 'mouseup').pipe(takeUntil(stop$));

        mouseDown$.pipe(
            switchMap(() => mouseMove$.pipe(takeUntil(mouseUp$))),
            map((event: MouseEvent) => {

            }),
        );
    }

}
