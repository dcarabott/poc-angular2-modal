import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { Ng2StateDeclaration, UIRouterModule, UIView } from 'ui-router-ng2';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

export let MAIN_STATES: Ng2StateDeclaration[] = [{
    name: 'app',
    component: AppComponent,
    url: '/',
}];

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        UIRouterModule.forRoot({
            states: MAIN_STATES
        }),
        ModalModule.forRoot(),
        BootstrapModalModule,
        HomeModule,
    ],
    declarations: [AppComponent],
    bootstrap: [UIView]

})
export class AppModule {

}
