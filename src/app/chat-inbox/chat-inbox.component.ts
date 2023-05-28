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
    console.log('setting socket connection')
     this.socket = io(SOCKET_ENDPOINT);
  }


  sendMessage() {
    this.socket.emit('message', this.message);
    this.message = '';
  }
}

