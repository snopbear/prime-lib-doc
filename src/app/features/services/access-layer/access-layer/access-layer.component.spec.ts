import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessLayerComponent } from './access-layer.component';

describe('AccessLayerComponent', () => {
  let component: AccessLayerComponent;
  let fixture: ComponentFixture<AccessLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessLayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
