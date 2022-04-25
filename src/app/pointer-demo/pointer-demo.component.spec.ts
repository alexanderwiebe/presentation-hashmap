import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointerDemoComponent } from './pointer-demo.component';

describe('PointerDemoComponent', () => {
  let component: PointerDemoComponent;
  let fixture: ComponentFixture<PointerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointerDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
