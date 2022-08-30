import { TestBed } from '@angular/core/testing';

import { ContactFormService } from './contact-form.service';

describe('ContactFormService', () => {
    let service: ContactFormService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ContactFormService);
    });

    describe('phone', () => {
        it('пустое значение невалидно', function () {
            expect(service.phone.hasError('required'))
                .toBe(true);
        });

        it('строка минимальной длины невалидна', function () {
            service.phone.setValue('8903');
            expect(service.phone.hasError('minlength'))
                .toBe(true);
        });

        it('строка длины 11 валидна', function () {
            service.phone.setValue('89037576898');
            expect(service.phone.hasError('minlength'))
                .toBe(false);
        });
    });

    describe('email', () => {
        it('пустое значение может быть валидно', function () {
            expect(service.email.hasError('required'))
                .toBe(false);
        });

        it('не валидно значение, которое не является email', function () {
            service.email.setValue('something');
            expect(service.email.hasError('email'))
                .toBe(true);

            service.email.setValue('1234');
            expect(service.email.hasError('email'))
                .toBe(true);

            service.email.setValue('abc123');
            expect(service.email.hasError('email'))
                .toBe(true);

            service.email.setValue('abc123@');
            expect(service.email.hasError('email'))
                .toBe(true);
        });

        it('email значение должно быть валидно', function () {
            service.email.setValue('abc@yandex.ru');
            expect(service.email.hasError('email'))
                .toBe(false);

            service.email.setValue('abc@ya.ru');
            expect(service.email.hasError('email'))
                .toBe(false);

            service.email.setValue('123@ya.ru');
            expect(service.email.hasError('email'))
                .toBe(false);

            service.email.setValue('ab.c123@ya.ru');
            expect(service.email.hasError('email'))
                .toBe(false);

            service.email.setValue('ab.c123@ru');
            expect(service.email.hasError('email'))
                .toBe(false);
        });
    });

});
