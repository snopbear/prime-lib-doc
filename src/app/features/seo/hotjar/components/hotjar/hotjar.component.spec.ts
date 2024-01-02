import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotjarComponent } from './hotjar.component';

describe('HotjarComponent', () => {
  let component: HotjarComponent;
  let fixture: ComponentFixture<HotjarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HotjarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotjarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
