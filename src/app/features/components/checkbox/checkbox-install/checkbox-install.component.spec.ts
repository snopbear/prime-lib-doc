import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxInstallComponent } from './checkbox-install.component';

describe('CheckboxInstallComponent', () => {
  let component: CheckboxInstallComponent;
  let fixture: ComponentFixture<CheckboxInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxInstallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
