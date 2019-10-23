import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFilterModalComponent } from './product-filter-modal.component';

describe('ProductFilterModalComponent', () => {
  let component: ProductFilterModalComponent;
  let fixture: ComponentFixture<ProductFilterModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFilterModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFilterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
