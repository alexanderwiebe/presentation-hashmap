import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointerExpComponent } from './pointer-exp.component';

describe('PointerExpComponent', () => {
  let component: PointerExpComponent;
  let fixture: ComponentFixture<PointerExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointerExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointerExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
