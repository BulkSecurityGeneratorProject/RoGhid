import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RoGhidSharedModule } from '../../shared';
import {
    CityService,
    CityPopupService,
    CityComponent,
    CityDetailComponent,
    CityDialogComponent,
    CityPopupComponent,
    CityDeletePopupComponent,
    CityDeleteDialogComponent,
    cityRoute,
    cityPopupRoute,
} from './';

const ENTITY_STATES = [
    ...cityRoute,
    ...cityPopupRoute,
];

@NgModule({
    imports: [
        RoGhidSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        CityComponent,
        CityDetailComponent,
        CityDialogComponent,
        CityDeleteDialogComponent,
        CityPopupComponent,
        CityDeletePopupComponent,
    ],
    entryComponents: [
        CityComponent,
        CityDialogComponent,
        CityPopupComponent,
        CityDeleteDialogComponent,
        CityDeletePopupComponent,
    ],
    providers: [
        CityService,
        CityPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RoGhidCityModule {}
