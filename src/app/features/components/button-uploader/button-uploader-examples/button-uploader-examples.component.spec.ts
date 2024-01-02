import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonUploaderExamplesComponent } from './button-uploader-examples.component';

describe('ButtonUploaderExamplesComponent', () => {
  let component: ButtonUploaderExamplesComponent;
  let fixture: ComponentFixture<ButtonUploaderExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonUploaderExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonUploaderExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
