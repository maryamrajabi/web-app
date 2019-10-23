import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListSliderComponent } from './product-list-slider.component';

describe('ProductListSliderComponent', () => {
  let component: ProductListSliderComponent;
  let fixture: ComponentFixture<ProductListSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
