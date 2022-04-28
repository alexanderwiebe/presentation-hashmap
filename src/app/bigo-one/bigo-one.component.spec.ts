import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigoOneComponent } from './bigo-one.component';

describe('BigoOneComponent', () => {
  let component: BigoOneComponent;
  let fixture: ComponentFixture<BigoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigoOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
