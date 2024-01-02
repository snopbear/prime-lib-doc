import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabViewExampleComponent } from './tab-view-example.component';

describe('TabViewExampleComponent', () => {
  let component: TabViewExampleComponent;
  let fixture: ComponentFixture<TabViewExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TabViewExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabViewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
