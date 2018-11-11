import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class BaseDestroy implements OnDestroy {
    protected destroyed$: Subject<boolean> = new Subject();

    constructor(){

    }

    ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
        console.log('[ngOnDestroy:BaseDestroy]')
    }
}
