import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { RecordMainComponent } from './record/record-main/record-main.component';
import { ChatMainComponent } from './chat/chat-main/chat-main.component';
import { DiscoveryMainComponent } from './discovery/discovery-main/discovery-main.component';
import { ActivityMainComponent } from './activity/activity-main/activity-main.component';
import { ProfileMainComponent } from './profiles/profile-main/profile-main.component';

const routes: Routes = [
  { path: 'record', component: RecordMainComponent },
  { path: 'chat', component: ChatMainComponent },
  { path: '', component: PostListComponent },
  { path: 'discovery', component: DiscoveryMainComponent },
  { path: 'create', component: PostCreateComponent },
  { path: 'edit/:postId', component: PostCreateComponent },
  { path: 'activity', component: ActivityMainComponent },
  { path: 'profile', component: ProfileMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
