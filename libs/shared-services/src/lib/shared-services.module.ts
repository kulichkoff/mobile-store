import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyService } from './services/empty.service';

@NgModule({
    imports: [CommonModule],
    providers: [
        EmptyService,
    ],
})
export class SharedServicesModule {
}
