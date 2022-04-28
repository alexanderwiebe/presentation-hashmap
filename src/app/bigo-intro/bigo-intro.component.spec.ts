import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigoIntroComponent } from './bigo-intro.component';

describe('BigoIntroComponent', () => {
  let component: BigoIntroComponent;
  let fixture: ComponentFixture<BigoIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigoIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigoIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
