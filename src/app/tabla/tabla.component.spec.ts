import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TABLAComponent } from './tabla.component';

describe('TABLAComponent', () => {
  let component: TABLAComponent;
  let fixture: ComponentFixture<TABLAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TABLAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TABLAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
