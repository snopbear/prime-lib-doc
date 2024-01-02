import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonInstallComponent } from './radio-button-install.component';

describe('RadioButtonInstallComponent', () => {
  let component: RadioButtonInstallComponent;
  let fixture: ComponentFixture<RadioButtonInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioButtonInstallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioButtonInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
