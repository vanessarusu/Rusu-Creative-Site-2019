import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandAuditComponent } from './brand-audit.component';

describe('BrandAuditComponent', () => {
  let component: BrandAuditComponent;
  let fixture: ComponentFixture<BrandAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
