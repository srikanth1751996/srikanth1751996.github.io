import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INSTRUMENTSComponent } from './instruments.component';

describe('INSTRUMENTSComponent', () => {
  let component: INSTRUMENTSComponent;
  let fixture: ComponentFixture<INSTRUMENTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ INSTRUMENTSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(INSTRUMENTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
