import { Component } from '@angular/core';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class TestData extends BSModalContext {
    constructor(public content: any) {
        super();
    }
}

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
export class HomeComponent implements ModalComponent<TestData> {

    context;

    constructor(public dialog: DialogRef<TestData>) {
        this.context = dialog.context;
    }

    beforeDismiss(): boolean {
        return true;
    }

    beforeClose(): boolean {
        return true;
    }
}
