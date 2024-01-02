import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonUploaderComponent } from './button-uploader.component';

describe('ButtonUploaderComponent', () => {
  let component: ButtonUploaderComponent;
  let fixture: ComponentFixture<ButtonUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonUploaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
