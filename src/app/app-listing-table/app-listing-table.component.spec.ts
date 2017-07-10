import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListingTableComponent } from './app-listing-table.component';

describe('AppListingTableComponent', () => {
  let component: AppListingTableComponent;
  let fixture: ComponentFixture<AppListingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppListingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
