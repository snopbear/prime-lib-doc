import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonPropertiesComponent } from './skeleton-properties.component';

describe('SkeletonPropertiesComponent', () => {
  let component: SkeletonPropertiesComponent;
  let fixture: ComponentFixture<SkeletonPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonPropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
