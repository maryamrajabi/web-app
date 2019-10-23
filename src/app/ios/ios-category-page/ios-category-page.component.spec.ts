import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosCategoryPageComponent } from './ios-category-page.component';

describe('IosCategoryPageComponent', () => {
  let component: IosCategoryPageComponent;
  let fixture: ComponentFixture<IosCategoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosCategoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
