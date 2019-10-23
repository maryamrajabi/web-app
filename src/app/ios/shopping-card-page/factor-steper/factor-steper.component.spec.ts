import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorSteperComponent } from './factor-steper.component';

describe('FactorSteperComponent', () => {
  let component: FactorSteperComponent;
  let fixture: ComponentFixture<FactorSteperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactorSteperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorSteperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
