import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonExampleComponent } from './skeleton-example.component';

describe('SkeletonExampleComponent', () => {
  let component: SkeletonExampleComponent;
  let fixture: ComponentFixture<SkeletonExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
