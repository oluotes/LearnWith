/**
 * Created by jhouser on 10/6/2017.
 * created to be used as a router module for testing, it is intended to completely replace the routing.module
 */

import { NgModule }      from '@angular/core';
import { RouterTestingModule }   from '@angular/router/testing';
import { Routes }   from '@angular/router';

import {LoginComponent} from "../../../../../src/com/dotComIt/learnWith/views/login/login.component";
import {TasksComponent} from "../../../../../src/com/dotComIt/learnWith/views/tasks/tasks.component";


const ROUTES : Routes = [
    { path: 'login',  component: LoginComponent },
    { path: 'tasks',  component: TasksComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];
@NgModule({
    imports: [ RouterTestingModule.withRoutes(ROUTES) ],
    exports: [ RouterTestingModule ]
})

export class AppRoutingModule {}