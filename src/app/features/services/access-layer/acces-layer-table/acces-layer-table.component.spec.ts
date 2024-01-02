import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesLayerTableComponent } from './acces-layer-table.component';

describe('AccesLayerTableComponent', () => {
  let component: AccesLayerTableComponent;
  let fixture: ComponentFixture<AccesLayerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesLayerTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesLayerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
