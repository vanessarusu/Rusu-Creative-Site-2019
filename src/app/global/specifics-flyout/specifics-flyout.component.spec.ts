import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificsFlyoutComponent } from './specifics-flyout.component';

describe('SpecificsFlyoutComponent', () => {
  let component: SpecificsFlyoutComponent;
  let fixture: ComponentFixture<SpecificsFlyoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificsFlyoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificsFlyoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
