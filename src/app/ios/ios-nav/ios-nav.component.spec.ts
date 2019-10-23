import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosNavComponent } from './ios-nav.component';

describe('IosNavComponent', () => {
  let component: IosNavComponent;
  let fixture: ComponentFixture<IosNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
