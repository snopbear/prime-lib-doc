import { Component } from '@angular/core';
import { TabViewItem } from 'assaf-prime-lib/@components/@tabview';
import { SharedModule } from '@shared-module/shared.module';

@Component({
  standalone: true,
  selector: 'assaf-documentation-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [SharedModule],
})
export class ButtonComponent {
  data: Array<Data> = [
    { id: 1, name: 'Object 1', categories: ['Category 1', 'cat'] },
    { id: 2, name: 'Object 3', categories: ['Category 1', 'moa'] },
    { id: 3, name: 'Object 3', categories: ['cat', 'Category 1'] },
    { id: 4, name: 'Object 2', categories: ['Category 2', 'Dog'] },
    { id: 5, name: 'Object 2', categories: ['Category 2', 'Dog'] },
    { id: 6, name: 'Object 5', categories: ['Category 2', 'D'] },
    { id: 7, name: 'Object 4', categories: ['Category 3', 'rabbit'] },
  ];

  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import('../button-install/button-install.component').then(
          (component) => component.ButtonInstallComponent
        ),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import('../button-example/button-example.component').then(
          (component) => component.ButtonExampleComponent
        ),
    },
  ];
}
interface Data {
  name: string;
  id: number;
  categories: Array<string>;
}
