import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonInstallComponent } from './skeleton-install.component';

describe('SkeletonInstallComponent', () => {
  let component: SkeletonInstallComponent;
  let fixture: ComponentFixture<SkeletonInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonInstallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
