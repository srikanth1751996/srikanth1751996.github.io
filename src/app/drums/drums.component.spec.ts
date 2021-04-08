import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DRUMSComponent } from './drums.component';

describe('DRUMSComponent', () => {
  let component: DRUMSComponent;
  let fixture: ComponentFixture<DRUMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DRUMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DRUMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
