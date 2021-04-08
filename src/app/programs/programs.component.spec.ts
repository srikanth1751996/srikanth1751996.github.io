import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PROGRAMSComponent } from './programs.component';

describe('PROGRAMSComponent', () => {
  let component: PROGRAMSComponent;
  let fixture: ComponentFixture<PROGRAMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PROGRAMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PROGRAMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
