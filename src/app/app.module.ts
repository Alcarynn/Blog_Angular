import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StorageServiceModule } from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PostListComponent } from './post-list/post-list.component';
import {MaterialModule} from './material/material.module';
import { SearchComponent } from './search/search.component';
import { AddpostComponent } from './addpost/addpost.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedService } from './_services/shared.service';
import { UserinfoComponent } from './userinfo/userinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostListComponent,
    SearchComponent,
    AddpostComponent,
    UserinfoComponent,    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    StorageServiceModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

