import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumberExampleComponent } from './input-number-example.component';

describe('InputNumberExampleComponent', () => {
  let component: InputNumberExampleComponent;
  let fixture: ComponentFixture<InputNumberExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNumberExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNumberExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
