import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageInstallComponent } from './message-install.component';

describe('MessageInstallComponent', () => {
  let component: MessageInstallComponent;
  let fixture: ComponentFixture<MessageInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageInstallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
