import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigoNComponent } from './bigo-n.component';

describe('BigoNComponent', () => {
  let component: BigoNComponent;
  let fixture: ComponentFixture<BigoNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigoNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigoNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
