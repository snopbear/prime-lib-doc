import { Component } from '@angular/core';
import { TabViewItem } from 'assaf-prime-lib/@components/@tabview';
import { SharedModule } from '@shared-module/shared.module';

@Component({
  selector: 'assaf-documentation-profile-drop-down',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './profile-drop-down.component.html',
  styleUrls: ['./profile-drop-down.component.scss'],
})
export class ProfileDropDownComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import(
          '../profile-drop-down-install/profile-drop-down-install.component'
        ).then((component) => component.ProfileDropDownInstallComponent),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import(
          '../profile-drop-down-example/profile-drop-down-example.component'
        ).then((component) => component.ProfileDropDownExampleComponent),
    },
  ];
}
