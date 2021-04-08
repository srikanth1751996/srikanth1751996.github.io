import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PIANOComponent } from './piano.component';

describe('PIANOComponent', () => {
  let component: PIANOComponent;
  let fixture: ComponentFixture<PIANOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PIANOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PIANOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
