import { Component } from '@angular/core';
import { AssafMessagesModule } from 'assaf-prime-lib/@components/@messages';
import { SharedModule } from '@shared-module/shared.module';
import { displayExamples } from '../data/example';
import { DisplayService } from 'assaf-prime-lib/services';

@Component({
  standalone: true,
  imports: [SharedModule, AssafMessagesModule],
  selector: 'assaf-documentation-display-example',
  templateUrl: './display-example.component.html',
  styleUrls: ['./display-example.component.scss'],
})
export class DisplayExampleComponent {
  constructor(private _display: DisplayService) {}
  get examples() {
    return displayExamples;
  }
  showMeassage() {
    this._display.displayMessage(
      'info',
      'Message',
      'keyMessage',
      ' Show you how to use Display Message'
    );
  }
  showToast() {
    this._display.displayToast(
      'success',
      'Toast',
      'Show you how to use Display Toast'
    );
  }
}
