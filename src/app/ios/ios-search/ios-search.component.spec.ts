import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosSearchComponent } from './ios-search.component';

describe('IosSearchComponent', () => {
  let component: IosSearchComponent;
  let fixture: ComponentFixture<IosSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
