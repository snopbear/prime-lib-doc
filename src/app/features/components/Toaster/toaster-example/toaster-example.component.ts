import { Component } from '@angular/core';
import { AssafToastModule } from 'assaf-prime-lib/@components/@toast';
import { SharedModule } from '@shared-module/shared.module';
import { ToasterExamples } from '../data/index';
import { DisplayService } from 'assaf-prime-lib/services';
import { MessageSeverity } from 'assaf-prime-lib/models';

@Component({
  standalone: true,
  imports: [SharedModule, AssafToastModule],
  selector: 'assaf-documentation-toaster-example',
  templateUrl: './toaster-example.component.html',
  styleUrls: ['./toaster-example.component.scss'],
})
export class ToasterExampleComponent {
  get ToasterExamples() {
    return ToasterExamples;
  }

  constructor(private __message: DisplayService) {}

  showMessage(severity: MessageSeverity, message: string, key: string) {
    this.__message.displayToast(severity, message, '', key);
  }
}
