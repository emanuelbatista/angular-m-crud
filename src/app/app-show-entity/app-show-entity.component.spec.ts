import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShowEntityComponent } from './app-show-entity.component';

describe('AppShowEntityComponent', () => {
  let component: AppShowEntityComponent;
  let fixture: ComponentFixture<AppShowEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppShowEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppShowEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
