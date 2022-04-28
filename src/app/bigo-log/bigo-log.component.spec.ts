import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigoLogComponent } from './bigo-log.component';

describe('BigoLogComponent', () => {
  let component: BigoLogComponent;
  let fixture: ComponentFixture<BigoLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigoLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigoLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
