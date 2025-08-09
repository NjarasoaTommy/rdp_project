import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedTemplateComponent } from './customized-template.component';

describe('CustomizedTemplateComponent', () => {
  let component: CustomizedTemplateComponent;
  let fixture: ComponentFixture<CustomizedTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizedTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizedTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
