import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidNavComponent } from './android-nav.component';

describe('AndroidNavComponent', () => {
  let component: AndroidNavComponent;
  let fixture: ComponentFixture<AndroidNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
