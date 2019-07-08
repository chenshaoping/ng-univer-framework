import { Component,NgModule } from '@angular/core';
import { FormDetailPage } from './form-detail.page';
import { FormDetailRoutingModule } from './form-detail.routing.module';

@NgModule({
    declarations: [
        FormDetailPage,
    ],
    imports: [
        FormDetailRoutingModule
    ],
    exports:[
        FormDetailPage
    ],
    providers: [

    ]
})

export class FormDetailPageModule{}