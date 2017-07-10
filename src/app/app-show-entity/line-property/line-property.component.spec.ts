import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinePropertyComponent } from './line-property.component';

describe('LinePropertyComponent', () => {
  let component: LinePropertyComponent;
  let fixture: ComponentFixture<LinePropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinePropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
