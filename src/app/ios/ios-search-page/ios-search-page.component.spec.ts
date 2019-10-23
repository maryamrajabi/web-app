import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosSearchPageComponent } from './ios-search-page.component';

describe('IosSearchPageComponent', () => {
  let component: IosSearchPageComponent;
  let fixture: ComponentFixture<IosSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
