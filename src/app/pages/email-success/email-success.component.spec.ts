import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSuccessComponent } from './email-success.component';

describe('EmailSuccessComponent', () => {
  let component: EmailSuccessComponent;
  let fixture: ComponentFixture<EmailSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
