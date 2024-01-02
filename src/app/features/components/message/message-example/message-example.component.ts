import { Component, OnInit } from '@angular/core';
import { DisplayService } from 'assaf-prime-lib/services';
import { SharedModule } from '@shared-module/shared.module';
import { MessageBtnExample, MessageExamples } from '../data/examples';
import { AssafMessagesModule } from 'assaf-prime-lib/@components/@messages';

@Component({
  standalone: true,
  selector: 'assaf-documentation-message-example',
  templateUrl: './message-example.component.html',
  styleUrls: ['./message-example.component.scss'],
  imports: [SharedModule, AssafMessagesModule],
})
export class MessageExampleComponent implements OnInit {
  get MessageExamples() {
    return MessageExamples;
  }
  get MessageBtnExample() {
    return MessageBtnExample;
  }
  constructor(private __message: DisplayService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.__message.displayMessage('error', 'Error', '1');
      this.__message.displayMessage('warn', 'Warn', '2');
      this.__message.displayMessage('success', 'Success', '3');
      this.__message.displayMessage('info', 'Info', '4');
    }, 0);
  }
  showMessage() {
    this.__message.displayMessage('warn', 'Warn Message', '5');
  }
}
