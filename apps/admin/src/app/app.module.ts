import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CoreModule } from './core/core.module';
import {
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedServicesModule } from '@app/shared-services';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
        ButtonModule,
        RippleModule,
        CoreModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        SharedServicesModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
