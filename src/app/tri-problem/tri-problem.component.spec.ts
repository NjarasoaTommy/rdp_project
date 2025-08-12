import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriProblemComponent } from './tri-problem.component';

describe('TriProblemComponent', () => {
  let component: TriProblemComponent;
  let fixture: ComponentFixture<TriProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriProblemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
