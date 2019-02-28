import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesBlockComponent } from './values-block.component';

describe('ValuesBlockComponent', () => {
  let component: ValuesBlockComponent;
  let fixture: ComponentFixture<ValuesBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuesBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
