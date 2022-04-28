import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigoNsqrComponent } from './bigo-nsqr.component';

describe('BigoNsqrComponent', () => {
  let component: BigoNsqrComponent;
  let fixture: ComponentFixture<BigoNsqrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigoNsqrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigoNsqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
