import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import {LoginComponent} from "../views/login/login.component";
import { TasksComponent } from "../views/tasks/tasks.component";

import { AppRoutingModule } from '../nav/routing.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

/// chapter 2
import {AuthenticationService} from '../services/mock/authentication.service';
import {AuthenticationServiceJava} from '../services/java/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import {UserModel} from "../model/usermodel";
import { FormsModule }   from '@angular/forms';

// chapter 3
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {TaskModel} from "../model/taskmodel";
import {TaskGrid} from "../views/tasks/taskgrid.component";
import {TaskService} from "../services/mock/task.service";
import {TaskServiceJava} from "../services/java/task.service";

// chapter 4
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TaskFilter} from "../views/tasks/taskfilter.component";

@NgModule({
    imports:      [ BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, NgxDatatableModule, NgbModule.forRoot() ],
    declarations: [ AppComponent, LoginComponent, TasksComponent, TaskGrid, TaskFilter ],
    bootstrap:    [ AppComponent ],
    providers : [
        {provide: LocationStrategy, useClass:HashLocationStrategy},
        {provide: AuthenticationService, useClass:AuthenticationServiceJava},
        UserModel,
        TaskModel,
        {provide: TaskService, useClass:TaskServiceJava},
    ],
})


export class AppModule { }