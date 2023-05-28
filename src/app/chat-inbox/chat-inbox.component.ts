import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';

const SOCKET_ENDPOINT = `http://localhost:3000`;

export type Message = {
  user: string;
  iconCharacter: string;
  messageText: string;
  alignment?: string;
}

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.css']
})


export class ChatInboxComponent implements OnInit {
  socket: any;
  user: string = '';
  messageText: string = '';
  messages: Message[] = [];

  constructor() { }

  ngOnInit() {
    this.setupSocketConnection();
    this.setupUserId();
  }

  setupUserId() {
    const idFromCurrentDate = +Date.now().toString().slice(7)  
    this.user = `User_${idFromCurrentDate}`;
  }

  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT);
    this.socket.on('message-broadcast', (data: Message) => {
      if (data) {
        // this.addMessageToDOM(data, 'left');
        this.messages.push({
          user: data.user,
          iconCharacter: 'U',
          messageText: data.messageText,
          alignment: this.getMessageAlignment(data.user)
        })
      }
    });
  }

  sendMessage() {
    if(this.messageText === '') return;
    const message = {
      user: this.user,
      iconCharacter: 'U',
      messageText: this.messageText,
      alignment: this.getMessageAlignment(this.user)
    };
    // this.addMessageToDOM(this.messageText, 'right');
    this.messages.push(message);
    this.socket.emit('message', message);

    this.messageText = '';
  }

  getMessageAlignment(user: string) {
    if(user === this.user) return 'left';
    return 'right';
  }

  // private addMessageToDOM(message: string, alignment: string): void {
  //   const element = document.createElement('li');
  //   element.className = 'message-bubble';
  //   element.style.textAlign = alignment;

  //   const icon = document.createElement('div');
  //   icon.className = 'message-icon';
  //   icon.textContent = 'User'

  //   const content = document.createElement('div');
  //   content.className = 'message-content';

  //   const title = document.createElement('h3');
  //   title.textContent = 'aaaa';

  //   const messageText = document.createElement('p');
  //   messageText.textContent = message;

  //   content.appendChild(title);
  //   content.appendChild(messageText);

  //   element.appendChild(icon);
  //   element.appendChild(content);

  //   //@ts-ignore
  //   document.getElementById('message-list').appendChild(element);
  // }
}
