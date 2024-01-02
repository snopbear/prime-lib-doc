import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterExampleComponent } from './toaster-example.component';

describe('ToasterExampleComponent', () => {
  let component: ToasterExampleComponent;
  let fixture: ComponentFixture<ToasterExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToasterExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToasterExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
