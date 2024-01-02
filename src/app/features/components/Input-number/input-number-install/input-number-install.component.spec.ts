import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumberInstallComponent } from './input-number-install.component';

describe('InputNumberInstallComponent', () => {
  let component: InputNumberInstallComponent;
  let fixture: ComponentFixture<InputNumberInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNumberInstallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNumberInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
