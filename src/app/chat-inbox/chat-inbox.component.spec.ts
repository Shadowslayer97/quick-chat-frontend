import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatInboxComponent } from './chat-inbox.component';

describe('ChatInboxComponent', () => {
  let component: ChatInboxComponent;
  let fixture: ComponentFixture<ChatInboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatInboxComponent]
    });
    fixture = TestBed.createComponent(ChatInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
