import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonUploaderInstallComponent } from './button-uploader-install.component';

describe('ButtonUploaderInstallComponent', () => {
  let component: ButtonUploaderInstallComponent;
  let fixture: ComponentFixture<ButtonUploaderInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonUploaderInstallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonUploaderInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
