import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMoreItemComponent } from './category-more-item.component';

describe('CategoryMoreItemComponent', () => {
  let component: CategoryMoreItemComponent;
  let fixture: ComponentFixture<CategoryMoreItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryMoreItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryMoreItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
