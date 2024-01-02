import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnobTableComponent } from './knob-table.component';

describe('KnobTableComponent', () => {
  let component: KnobTableComponent;
  let fixture: ComponentFixture<KnobTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnobTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnobTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
