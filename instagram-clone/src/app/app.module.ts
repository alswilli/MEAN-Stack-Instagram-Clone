import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { ActivityMainComponent } from './activity/activity-main/activity-main.component';
import { DiscoveryMainComponent } from './discovery/discovery-main/discovery-main.component';
import { ProfileMainComponent } from './profiles/profile-main/profile-main.component';
import { RecordMainComponent } from './record/record-main/record-main.component';
import { ChatMainComponent } from './chat/chat-main/chat-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostCreateComponent,
    ActivityMainComponent,
    DiscoveryMainComponent,
    ProfileMainComponent,
    RecordMainComponent,
    ChatMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatCardModule,
    HttpClientModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

