import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
    Observable,
    Subject,
} from 'rxjs';

interface IQueryObject {
    [key: string]: string;
}

@Injectable({
    providedIn: 'root',
})
export class QuerySearchParamsService {

    private _query$ = new Subject<IQueryObject>();

    constructor(
        private router: Router,
    ) {
        this._query$.subscribe(async (newQueryObject: IQueryObject) => {
            const url = this.router.url.split('?')[0];
            await this.router.navigate([url], { queryParams: newQueryObject });
        });
    }

    /**
     * Полностью сменяет все query параметры.
     * @param newQueryObject
     */
    public setQuery(newQueryObject: IQueryObject) {
        this._query$.next(newQueryObject);
    }

    public getQuery$(): Observable<IQueryObject> {
        return this._query$.asObservable();
    }
}
