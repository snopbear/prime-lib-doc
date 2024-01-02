import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsetInstallComponent } from './fieldset-install.component';

describe('FieldsetInstallComponent', () => {
  let component: FieldsetInstallComponent;
  let fixture: ComponentFixture<FieldsetInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldsetInstallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldsetInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
