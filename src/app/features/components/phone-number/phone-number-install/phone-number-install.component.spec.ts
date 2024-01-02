import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberInstallComponent } from './phone-number-install.component';

describe('PhoneNumberInstallComponent', () => {
  let component: PhoneNumberInstallComponent;
  let fixture: ComponentFixture<PhoneNumberInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PhoneNumberInstallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneNumberInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
