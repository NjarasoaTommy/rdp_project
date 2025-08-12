import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tri2Component } from './tri2.component';

describe('Tri2Component', () => {
  let component: Tri2Component;
  let fixture: ComponentFixture<Tri2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tri2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tri2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
