import { Route } from '@angular/router';

import { MapsComponent } from './maps.component';

export const mapsRoute: Route = {
    path: 'maps',
    component: MapsComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'maps.title'
    }
};
