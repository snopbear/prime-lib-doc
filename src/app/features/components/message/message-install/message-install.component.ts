import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { messageInstall } from '../data';
import { MessageTableComponent } from '../message-table/message-table.component';

@Component({
  standalone: true,
  selector: 'assaf-documentation-message-install',
  templateUrl: './message-install.component.html',
  styleUrls: ['./message-install.component.scss'],
  imports: [SharedModule,MessageTableComponent],
})
export class MessageInstallComponent {
  get _install() {
    return messageInstall;
  }

}
