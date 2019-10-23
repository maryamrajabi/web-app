import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosProfileComponent } from './ios-profile.component';

describe('IosProfileComponent', () => {
  let component: IosProfileComponent;
  let fixture: ComponentFixture<IosProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
