import { Component } from '@angular/core';
import { routes } from '../../routes';

@Component({
  selector: 'assaf-documentation-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss'],
})
export class NavContentComponent {
  get _navLinks() {
    return routes;
  }
}
