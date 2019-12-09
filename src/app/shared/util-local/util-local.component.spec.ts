import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilLocalComponent } from './util-local.component';

describe('UtilLocalComponent', () => {
  let component: UtilLocalComponent;
  let fixture: ComponentFixture<UtilLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
