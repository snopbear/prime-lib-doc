import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { install } from '../data';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { DialogServicesMethodsComponent } from '../dialog-services-methods/dialog-services-methods.component';
import { DynamicDialogService } from 'assaf-prime-lib/services';

@Component({
  selector: 'assaf-documentation-dynamic-dialog',
  templateUrl: './dynamic-dialog.component.html',
  styleUrls: ['./dynamic-dialog.component.scss'],
  standalone: true,
  imports: [SharedModule, DialogServicesMethodsComponent],
})
export class DynamicDialogComponent {
  constructor(private __dialog: DynamicDialogService) {}
  get install() {
    return install;
  }
  dispalyDialog() {
    this.__dialog.showDialog(
      DialogExampleComponent,
      'Hello World ❤!',
      true,
      'BasicDialog',
      'max-w-xl mx-auto'
    );
  }
}
