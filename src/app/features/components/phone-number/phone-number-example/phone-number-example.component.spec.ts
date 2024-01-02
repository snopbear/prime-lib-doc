import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberExampleComponent } from './phone-number-example.component';

describe('PhoneNumberExampleComponent', () => {
  let component: PhoneNumberExampleComponent;
  let fixture: ComponentFixture<PhoneNumberExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PhoneNumberExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneNumberExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
