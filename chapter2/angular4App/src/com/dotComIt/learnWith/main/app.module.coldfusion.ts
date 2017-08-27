import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent }  from './app.component';

import {LoginComponent} from "../views/login/login.component";
import {TasksComponent} from "../views/tasks/tasks.component";

import { AppRoutingModule }     from '../nav/routing.module';

import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import {UserModel} from "../model/usermodel";
import {AuthenticationService} from "../services/mock/authentication.service";
import {AuthenticationServiceCF} from "../services/coldfusion/authentication.service";


@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent
  ],
  providers : [
      {provide: LocationStrategy, useClass:HashLocationStrategy},
      UserModel,
      // note: This is some code wrangling not writte about in the book but makes reusing code lots easier.
      {provide: AuthenticationService, useClass: AuthenticationServiceCF}

  ],
  bootstrap:    [ AppComponent ]

})
export class AppModule { }
