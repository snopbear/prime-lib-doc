import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputInstallComponent } from './input-install.component';

describe('InputInstallComponent', () => {
  let component: InputInstallComponent;
  let fixture: ComponentFixture<InputInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputInstallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
