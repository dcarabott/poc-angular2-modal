import { Component, ViewContainerRef } from '@angular/core';
import './operators';
import { Modal, Overlay } from 'angular2-modal';
import { HomeComponent, TestData } from './home/home.component';

/**
 * This class represents the main application component.
 */
@Component({
    moduleId: module.id,
    templateUrl: 'app.component.html',
})
export class AppComponent {

    constructor(overlay: Overlay, vcRef: ViewContainerRef, private modal: Modal) {
        overlay.defaultViewContainer = vcRef;
    }

    openModal() {
        this.modal.open(HomeComponent, {context: new TestData('Test')});
    }
}
