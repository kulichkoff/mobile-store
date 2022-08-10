import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SearchFieldComponent,
    ],
    imports: [
        CommonModule,
        InputTextModule,
        FormsModule,
    ],
    exports: [
        SearchFieldComponent,
    ],
})
export class CoreModule {
}
