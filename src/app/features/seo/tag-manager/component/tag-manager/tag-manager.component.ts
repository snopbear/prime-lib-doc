import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { TagManagerSteps } from '../../data';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-tag-manager',
  templateUrl: './tag-manager.component.html',
  styleUrls: ['./tag-manager.component.scss'],
})
export class TagManagerComponent {
  get steps() {
    return TagManagerSteps;
  }
}
