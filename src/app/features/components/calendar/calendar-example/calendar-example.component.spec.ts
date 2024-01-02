import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarExampleComponent } from './calendar-example.component';

describe('CalendarExampleComponent', () => {
  let component: CalendarExampleComponent;
  let fixture: ComponentFixture<CalendarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
