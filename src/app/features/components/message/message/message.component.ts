import { Component } from '@angular/core';
import { TabViewItem } from 'assaf-prime-lib/@components/@tabview';
import { SharedModule } from '@shared-module/shared.module';

@Component({
  standalone: true,
  selector: 'assaf-documentation-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  imports: [SharedModule],
})
export class MessageComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import('../message-install/message-install.component').then(
          (component) => component.MessageInstallComponent
        ),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import('../message-example/message-example.component').then(
          (component) => component.MessageExampleComponent
        ),
    },
  ];
}
