import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerPropertiesComponent } from './divider-properties.component';

describe('DividerPropertiesComponent', () => {
  let component: DividerPropertiesComponent;
  let fixture: ComponentFixture<DividerPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DividerPropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividerPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
