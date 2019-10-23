import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosCategoryMainItemComponent } from './ios-category-main-item.component';

describe('IosCategoryMainItemComponent', () => {
  let component: IosCategoryMainItemComponent;
  let fixture: ComponentFixture<IosCategoryMainItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosCategoryMainItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosCategoryMainItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
