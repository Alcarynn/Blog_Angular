import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpostComponent } from './addpost/addpost.component';
import {PostListComponent} from './post-list/post-list.component'
import {UserinfoComponent} from './userinfo/userinfo.component'
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/wall/0', pathMatch: 'full' },
  { path: 'addmessage/:postid',  component: AddpostComponent  },
  { path: 'wall/:postid', component: PostListComponent},
  { path: 'userinfo/:userid', component: UserinfoComponent},
  { path: 'searchusers', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
