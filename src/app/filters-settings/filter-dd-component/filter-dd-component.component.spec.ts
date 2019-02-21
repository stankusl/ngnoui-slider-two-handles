import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDdComponentComponent } from './filter-dd-component.component';

describe('FilterDdComponentComponent', () => {
  let component: FilterDdComponentComponent;
  let fixture: ComponentFixture<FilterDdComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterDdComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDdComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
