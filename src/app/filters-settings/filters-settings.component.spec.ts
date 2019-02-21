import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersSettingsComponent } from './filters-settings.component';

describe('FiltersSettingsComponent', () => {
  let component: FiltersSettingsComponent;
  let fixture: ComponentFixture<FiltersSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
