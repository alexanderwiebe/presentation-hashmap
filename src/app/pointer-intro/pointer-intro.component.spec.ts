import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointerIntroComponent } from './pointer-intro.component';

describe('PointerIntroComponent', () => {
  let component: PointerIntroComponent;
  let fixture: ComponentFixture<PointerIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointerIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointerIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
