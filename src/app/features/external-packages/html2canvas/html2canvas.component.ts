import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { install } from './data';

@Component({
  selector: 'assaf-documentation-html2canvas',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './html2canvas.component.html',
  styleUrls: ['./html2canvas.component.scss'],
})
export class Html2canvasComponent {
  get install() {
    return install;
  }
}
