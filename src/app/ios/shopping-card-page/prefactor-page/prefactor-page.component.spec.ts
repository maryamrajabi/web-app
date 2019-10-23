import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefactorPageComponent } from './prefactor-page.component';

describe('PrefactorPageComponent', () => {
  let component: PrefactorPageComponent;
  let fixture: ComponentFixture<PrefactorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefactorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefactorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
