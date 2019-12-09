import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalDialogoComponent } from './local-dialogo.component';

describe('LocalDialogoComponent', () => {
  let component: LocalDialogoComponent;
  let fixture: ComponentFixture<LocalDialogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalDialogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
