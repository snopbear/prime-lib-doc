import { Component } from '@angular/core';
import { TabViewItem } from 'assaf-prime-lib/@components/@tabview';
import { SharedModule } from '@shared-module/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss'],
})
export class DirectiveComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import('../directive-install/directive-install.component').then(
          (component) => component.DirectiveInstallComponent
        ),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import('../directive-example/directive-example.component').then(
          (component) => component.DirectiveExampleComponent
        ),
    },
  ];
}
