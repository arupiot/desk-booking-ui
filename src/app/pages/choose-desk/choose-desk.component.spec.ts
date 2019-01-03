import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDeskComponent } from './choose-desk.component';

describe('ChooseDeskComponent', () => {
  let component: ChooseDeskComponent;
  let fixture: ComponentFixture<ChooseDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
