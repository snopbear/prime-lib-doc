import { Component, HostListener, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'assaf-documentation-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile.next(event.target?.innerWidth < 1024);
  }
  _isMobile: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  _showSideNav: boolean = false;

  ngOnInit(): void {
    this._isMobile.next(window.innerWidth < 1024);
  }

  enableSideNav(): void {
    this._showSideNav = !this._showSideNav;
  }
}
