import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProjectsBlockComponent } from './main-projects-block.component';

describe('MainProjectsBlockComponent', () => {
  let component: MainProjectsBlockComponent;
  let fixture: ComponentFixture<MainProjectsBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainProjectsBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProjectsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
