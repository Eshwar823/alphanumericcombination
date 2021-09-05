import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationsTableComponent } from './combinations-table.component';

describe('CombinationsTableComponent', () => {
  let component: CombinationsTableComponent;
  let fixture: ComponentFixture<CombinationsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinationsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
