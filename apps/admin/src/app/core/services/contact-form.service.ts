import { Injectable } from '@angular/core';
import {
    FormControl,
    Validators,
} from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class ContactFormService {
    phone = new FormControl('',
        [
            Validators.required,
            Validators.minLength(11),
        ]);

    email = new FormControl('',
        [
            Validators.email,
        ]);
}
