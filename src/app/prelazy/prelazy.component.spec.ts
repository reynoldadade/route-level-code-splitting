import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelazyComponent } from './prelazy.component';

describe('PrelazyComponent', () => {
  let component: PrelazyComponent;
  let fixture: ComponentFixture<PrelazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrelazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrelazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
