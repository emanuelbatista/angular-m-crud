import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormComponentComponent } from './app-form-component.component';

describe('AppFormComponentComponent', () => {
  let component: AppFormComponentComponent;
  let fixture: ComponentFixture<AppFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
