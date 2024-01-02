import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumberTableComponent } from './input-number-table.component';

describe('InputNumberTableComponent', () => {
  let component: InputNumberTableComponent;
  let fixture: ComponentFixture<InputNumberTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNumberTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNumberTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
