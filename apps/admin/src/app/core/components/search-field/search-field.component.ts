import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
} from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: SearchFieldComponent,
            multi: true,
        }
    ],
})
export class SearchFieldComponent implements ControlValueAccessor {
    private _searchText = '';

    set searchText(value: string) {
       this._searchText = value;
       this.onChange(value);
       this.onTouch(value);
    }

    get searchText(): string {
        return this._searchText;
    }

    onChange: any = () => {}
    onTouch: any = () => {}

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    public writeValue(searchText: string): void {
        this.searchText = searchText;
    }
}
