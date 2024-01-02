import { Component } from '@angular/core';
import { AssafSkeletonModule } from 'assaf-prime-lib/@components/@skeleton';
import { SharedModule } from '@shared-module/shared.module';
import { SkeletonExample, SkeletonStyle } from '../data/index';

@Component({
  standalone: true,
  imports: [SharedModule, AssafSkeletonModule],
  selector: 'assaf-documentation-skeleton-example',
  templateUrl: './skeleton-example.component.html',
  styleUrls: ['./skeleton-example.component.scss'],
})
export class SkeletonExampleComponent {
  //#region Declarations
  get skeletonExample() {
    return SkeletonExample;
  }
  get SkeletonStyle() {
    return SkeletonStyle;
  }
  //#endregion Declarations
}
