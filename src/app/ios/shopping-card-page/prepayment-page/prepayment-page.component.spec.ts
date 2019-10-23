import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaymentPageComponent } from './prepayment-page.component';

describe('PrepaymentPageComponent', () => {
  let component: PrepaymentPageComponent;
  let fixture: ComponentFixture<PrepaymentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepaymentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepaymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
