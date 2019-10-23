import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosTrackingOrdersPageComponent } from './ios-tracking-orders-page.component';

describe('IosTrackingOrdersPageComponent', () => {
  let component: IosTrackingOrdersPageComponent;
  let fixture: ComponentFixture<IosTrackingOrdersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosTrackingOrdersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosTrackingOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
