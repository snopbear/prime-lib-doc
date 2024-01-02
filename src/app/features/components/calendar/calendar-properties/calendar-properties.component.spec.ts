import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarPropertiesComponent } from './calendar-properties.component';

describe('CalendarPropertiesComponent', () => {
  let component: CalendarPropertiesComponent;
  let fixture: ComponentFixture<CalendarPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarPropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
