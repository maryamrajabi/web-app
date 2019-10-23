import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosCheckboxComponent } from './ios-checkbox.component';

describe('IosCheckboxComponent', () => {
  let component: IosCheckboxComponent;
  let fixture: ComponentFixture<IosCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
