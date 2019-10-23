import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefactorComponent } from './prefactor.component';

describe('PrefactorComponent', () => {
  let component: PrefactorComponent;
  let fixture: ComponentFixture<PrefactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
