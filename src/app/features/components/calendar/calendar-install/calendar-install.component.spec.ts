import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarInstallComponent } from './calendar-install.component';

describe('CalendarInstallComponent', () => {
  let component: CalendarInstallComponent;
  let fixture: ComponentFixture<CalendarInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarInstallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
