import { Component, Input } from '@angular/core';
import { Message } from '../chat-inbox/chat-inbox.component';

@Component({
  selector: 'app-chat-inbox-message',
  templateUrl: './chat-inbox-message.component.html',
  styleUrls: ['./chat-inbox-message.component.css']
})
export class ChatInboxMessageComponent {

  @Input() message: Message;
  constructor() {
    this.message = {
      user: '',
      iconCharacter: '',
      messageText: '',
      //@ts-ignore
      alignment: 'left'
    };
  }

}
