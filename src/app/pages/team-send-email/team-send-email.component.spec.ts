import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSendEmailComponent } from './team-send-email.component';

describe('TeamSendEmailComponent', () => {
  let component: TeamSendEmailComponent;
  let fixture: ComponentFixture<TeamSendEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamSendEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSendEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
