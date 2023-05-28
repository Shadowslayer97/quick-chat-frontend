import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';

const SOCKET_ENDPOINT = `http://localhost:3000`;

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.css']
})
export class ChatInboxComponent implements OnInit {
  socket: any;
  message: string = '';

  constructor() { }

  ngOnInit() {
    this.setupSocketConnection();
  }

  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT);
    this.socket.on('message-broadcast', (data: string) => {
      if (data) {
        this.addMessageToDOM(data, 'left');
      }
    });
  }

  sendMessage() {
    this.socket.emit('message', this.message);
    this.addMessageToDOM(this.message, 'right');

    this.message = '';
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.sendMessage();
    }
  }

  private addMessageToDOM(message: string, alignment: string): void {
    const element = document.createElement('li');
    element.className = 'message-bubble';
    element.style.textAlign = alignment;

    const icon = document.createElement('div');
    icon.className = 'message-icon';
    icon.textContent = 'User'

    const content = document.createElement('div');
    content.className = 'message-content';

    const title = document.createElement('h3');
    title.textContent = 'aaaa';

    const messageText = document.createElement('p');
    messageText.textContent = message;

    content.appendChild(title);
    content.appendChild(messageText);

    element.appendChild(icon);
    element.appendChild(content);

    //@ts-ignore
    document.getElementById('message-list').appendChild(element);
  }
}
