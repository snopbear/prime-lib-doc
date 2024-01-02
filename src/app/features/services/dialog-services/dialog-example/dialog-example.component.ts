import { Component } from '@angular/core';
import {
  DisplayService,
  DynamicDialogService,
} from 'assaf-prime-lib/services';
import { SharedModule } from '@shared-module/shared.module';

@Component({
  selector: 'assaf-documentation-dialog-example',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss'],
})
export class DialogExampleComponent {
  constructor(
    public __dialog: DynamicDialogService,
    private __toast: DisplayService
  ) {}
  closeDialog() {
    this.__dialog.closeDialog();
  }
}
