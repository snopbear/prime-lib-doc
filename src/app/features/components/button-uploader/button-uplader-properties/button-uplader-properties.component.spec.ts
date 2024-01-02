import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonUpladerPropertiesComponent } from './button-uplader-properties.component';

describe('ButtonUpladerPropertiesComponent', () => {
  let component: ButtonUpladerPropertiesComponent;
  let fixture: ComponentFixture<ButtonUpladerPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonUpladerPropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonUpladerPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
