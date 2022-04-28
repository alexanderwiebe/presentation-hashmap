import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashIntroComponent } from './hash-intro.component';

describe('HashIntroComponent', () => {
  let component: HashIntroComponent;
  let fixture: ComponentFixture<HashIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
