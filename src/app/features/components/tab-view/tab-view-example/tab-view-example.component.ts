import { Component } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';
import { TabViewItem } from 'assaf-prime-lib/@components/@tabview';
import { FormBuilder } from '@angular/forms';
import { TabViewExamples } from '../data/index';

@Component({
  selector: 'assaf-documentation-tab-view-example',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './tab-view-example.component.html',
  styleUrls: ['./tab-view-example.component.scss'],
})
export class TabViewExampleComponent {
  get TabViewExamples() {
    return TabViewExamples;
  }

  constructor(private _fb: FormBuilder) {}

  data: Array<TabViewItem> = [
    {
      component: () =>
        import('../tap-view-one/tap-view-one.component').then(
          (component) => component.TapViewOneComponent
        ),
      header: 'Component One',
      leftIcon: 'pi pi-inbox',
    },
    {
      component: () =>
        import('../tap-view-two/tap-view-two.component').then(
          (component) => component.TapViewTwoComponent
        ),
      header: 'Component Two',
      rightIcon: 'pi pi-pause',
    },
    {
      component: () =>
        import('../tap-view-three/tap-view-three.component').then(
          (component) => component.TapViewThreeComponent
        ),
      header: 'Component Three',
      leftIcon: 'pi pi-star',
      rightIcon: 'pi pi-star-fill',
    },
  ];
  ngOnInit() {}
}
