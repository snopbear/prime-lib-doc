import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploaderInstallComponent } from './image-uploader-install.component';

describe('ImageUploaderInstallComponent', () => {
  let component: ImageUploaderInstallComponent;
  let fixture: ComponentFixture<ImageUploaderInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageUploaderInstallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageUploaderInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
