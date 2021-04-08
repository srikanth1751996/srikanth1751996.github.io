import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GUITARComponent } from './guitar.component';

describe('GUITARComponent', () => {
  let component: GUITARComponent;
  let fixture: ComponentFixture<GUITARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GUITARComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GUITARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
