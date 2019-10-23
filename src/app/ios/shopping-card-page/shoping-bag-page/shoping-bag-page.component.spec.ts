import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingBagPageComponent } from './shoping-bag-page.component';

describe('ShopingBagPageComponent', () => {
  let component: ShopingBagPageComponent;
  let fixture: ComponentFixture<ShopingBagPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingBagPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingBagPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
