import { Component } from '@angular/core';
import {
  AssafTabviewModule,
  TabViewItem,
} from 'assaf-prime-lib/@components/@tabview';

@Component({
  standalone: true,
  selector: 'assaf-documentation-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  imports: [AssafTabviewModule],
})
export class DropdownComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import('../dropdown-install/dropdown-install.component').then(
          (component) => component.DropdownInstallComponent
        ),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import('../dropdown-example/dropdown-example.component').then(
          (component) => component.DropdownExampleComponent
        ),
    },
  ];
}
