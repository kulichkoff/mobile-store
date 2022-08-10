import {
    ChangeDetectorRef,
    Component,
    OnInit,
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
} from '@angular/forms';
import {
    HttpClient,
    HttpParams,
} from '@angular/common/http';
import { take } from 'rxjs';
import { QuerySearchParamsService } from './core/services/query-search-params.service';
import { EmptyService } from 'libs/shared-services/src';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

    public searchForm: FormGroup = this.fb.group({
        searchText: '',
        currency: '',
    });

    constructor(
        private fb: FormBuilder,
        private changeDetectorRef: ChangeDetectorRef,
        private http: HttpClient,
        private querySearchParamsService: QuerySearchParamsService,
        private empty: EmptyService,
    ) {}

    public ngOnInit() {
        this.searchForm.valueChanges
            .subscribe((value) => { this.onFormChanged(value) });

        console.log(this.empty.getHello());
    }

    public onBtnClicked() {
        this.changeDetectorRef.detectChanges();

        const params = new HttpParams({
            fromObject: {
                q: this.searchForm.value.searchText,
                currency: this.searchForm.value.currency,
            },
        });

        this.http.get('http://kulichkoff.space:3030/mobiles', { params })
            .pipe(
                take(1),
            )
            .subscribe((data) => {
                console.log(data);
            });
    }

    public onFormChanged(formValue: FormGroup['value']) {
        this.querySearchParamsService.setQuery(
            {
                q: formValue.searchText,
                currency: formValue.currency,
            },
        );
    }

    public onRubBtnClicked() {
        this.searchForm.patchValue({ currency: 'RUB' });
    }
}

