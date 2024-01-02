import { Component } from '@angular/core';
import { AssafImageModule } from 'assaf-prime-lib/@components/@image';
import { SharedModule } from '@shared-module/shared.module';
import { imageExamples } from '../data/examples';

@Component({
  standalone: true,
  imports: [SharedModule, AssafImageModule],
  selector: 'assaf-documentation-image-example',
  templateUrl: './image-example.component.html',
  styleUrls: ['./image-example.component.scss'],
})
export class ImageExampleComponent {
  get example() {
    return imageExamples;
  }
}
