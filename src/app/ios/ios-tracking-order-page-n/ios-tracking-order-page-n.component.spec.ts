import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosTrackingOrderPageNComponent } from './ios-tracking-order-page-n.component';

describe('IosTrackingOrderPageNComponent', () => {
  let component: IosTrackingOrderPageNComponent;
  let fixture: ComponentFixture<IosTrackingOrderPageNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosTrackingOrderPageNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosTrackingOrderPageNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
