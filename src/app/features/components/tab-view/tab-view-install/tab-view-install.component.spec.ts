import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabViewInstallComponent } from './tab-view-install.component';

describe('TabViewInstallComponent', () => {
  let component: TabViewInstallComponent;
  let fixture: ComponentFixture<TabViewInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TabViewInstallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabViewInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
