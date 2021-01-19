import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProjectsSectionComponent } from './main-projects-section.component';

describe('MainProjectsSectionComponent', () => {
  let component: MainProjectsSectionComponent;
  let fixture: ComponentFixture<MainProjectsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainProjectsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProjectsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
