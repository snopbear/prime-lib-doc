import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { scriptTag } from './data/script-tag';

@Component({
  selector: 'app-inject-script-tag',
  templateUrl: './inject-script-tag.component.html',
  styleUrls: ['./inject-script-tag.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class InjectScriptTagComponent {
  constructor() {}
  get steps() {
    return scriptTag;
  }
}
