import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class EmptyService {

    public getHello() {
        return 'hello';
    }

}
