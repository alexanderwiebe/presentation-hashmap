import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigoFacComponent } from './bigo-fac.component';

describe('BigoFacComponent', () => {
  let component: BigoFacComponent;
  let fixture: ComponentFixture<BigoFacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigoFacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigoFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
