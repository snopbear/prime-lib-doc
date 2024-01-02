import { Component } from '@angular/core';
import { AssafDividerModule } from 'assaf-prime-lib/@components/@divider';
import { SharedModule } from '@shared-module/shared.module';
import { dividerArray } from '../data';

@Component({
  selector: 'assaf-documentation-divider-example',
  templateUrl: './divider-example.component.html',
  styleUrls: ['./divider-example.component.scss'],
  standalone: true,
  imports: [SharedModule, AssafDividerModule],
})
export class DividerExampleComponent {
  get dividerData(): any {
    return dividerArray;
  }
}
