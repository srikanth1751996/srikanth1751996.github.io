import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VIOLINComponent } from './violin.component';

describe('VIOLINComponent', () => {
  let component: VIOLINComponent;
  let fixture: ComponentFixture<VIOLINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VIOLINComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VIOLINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
