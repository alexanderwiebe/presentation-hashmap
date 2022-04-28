import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashArrayComponent } from './hash-array.component';

describe('HashArrayComponent', () => {
  let component: HashArrayComponent;
  let fixture: ComponentFixture<HashArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
