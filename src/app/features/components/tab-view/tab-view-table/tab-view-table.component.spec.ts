import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabViewTableComponent } from './tab-view-table.component';

describe('TabViewTableComponent', () => {
  let component: TabViewTableComponent;
  let fixture: ComponentFixture<TabViewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabViewTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
