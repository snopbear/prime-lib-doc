/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RatingInstallComponent } from './rating-install.component';

describe('RatingInstallComponent', () => {
  let component: RatingInstallComponent;
  let fixture: ComponentFixture<RatingInstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingInstallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
