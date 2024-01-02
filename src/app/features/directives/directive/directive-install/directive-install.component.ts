import { Component } from '@angular/core';
import { directiveInstall } from '../data/install';

@Component({
  selector: 'assaf-documentation-directive-install',
  templateUrl: './directive-install.component.html',
  styleUrls: ['./directive-install.component.scss'],
})
export class DirectiveInstallComponent {
  get install() {
    return directiveInstall;
  }
}
