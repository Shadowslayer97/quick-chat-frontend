import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';

import { FormsModule } from '@angular/forms'; 
import { ChatInboxMessageComponent } from './chat-inbox-message/chat-inbox-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatInboxComponent,
    ChatInboxMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
