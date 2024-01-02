import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploaderPropertiesComponent } from './image-uploader-properties.component';

describe('ImageUploaderPropertiesComponent', () => {
  let component: ImageUploaderPropertiesComponent;
  let fixture: ComponentFixture<ImageUploaderPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ImageUploaderPropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageUploaderPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
