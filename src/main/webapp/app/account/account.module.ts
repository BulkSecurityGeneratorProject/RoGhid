import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RoGhidSharedModule } from '../shared';

import { AgmCoreModule } from '@agm/core';
import {RatingModule} from "ng2-rating";


import {
    Register,
    ActivateService,
    PasswordService,
    PasswordResetInitService,
    PasswordResetFinishService,
    PasswordStrengthBarComponent,
    RegisterComponent,
    SetariComponent,
    AcasaComponent,
    PostsComponent,
    GroupsComponent,
    MapsComponent,
    SupportComponent,
    ListComponent,
    ActivateComponent,
    PasswordComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    SettingsComponent,
    SocialRegisterComponent,
    SocialAuthComponent,
    accountState
  } from './';
import {SearchFilterBy} from "./acasa/SearchFilter.pipe";
@NgModule({
    imports: [
        RoGhidSharedModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCYwWA88TpLG7s3J0AivYirG7B4U2nWD4I'
        }),
        RatingModule,
        RouterModule.forRoot(accountState, { useHash: true })
    ],
    declarations: [
        SocialRegisterComponent,
        SocialAuthComponent,
        ActivateComponent,
        RegisterComponent,
        SetariComponent,
        AcasaComponent,
        PostsComponent,
        GroupsComponent,
        MapsComponent,
        ListComponent,
        SupportComponent,
        PasswordComponent,
        PasswordStrengthBarComponent,
        PasswordResetInitComponent,
        PasswordResetFinishComponent,
        SettingsComponent,
        SearchFilterBy
    ],
    providers: [
        Register,
        ActivateService,
        PasswordService,
        PasswordResetInitService,
        PasswordResetFinishService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RoGhidAccountModule {}
