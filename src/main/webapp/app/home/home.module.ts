import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RoGhidSharedModule } from '../shared';

import { HOME_ROUTE, HomeComponent } from './';
import {SearchFilter} from "./filterr.pipe";

@NgModule({
    imports: [
        RoGhidSharedModule,
        RouterModule.forRoot([ HOME_ROUTE ], { useHash: true })
    ],
    declarations: [
        HomeComponent,
        SearchFilter
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RoGhidHomeModule {}
