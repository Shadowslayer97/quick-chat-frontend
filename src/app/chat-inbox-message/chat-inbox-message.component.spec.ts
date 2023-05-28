import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatInboxMessageComponent } from './chat-inbox-message.component';

describe('ChatInboxMessageComponent', () => {
  let component: ChatInboxMessageComponent;
  let fixture: ComponentFixture<ChatInboxMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatInboxMessageComponent]
    });
    fixture = TestBed.createComponent(ChatInboxMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
