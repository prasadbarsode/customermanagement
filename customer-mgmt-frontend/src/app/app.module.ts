import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { CustmgmtModule } from './custmgmt/custmgmt.module';

import { RouterModule } from '@angular/router';

import { CustdetailsService } from './services/custdetails.service';

import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ValidaterulesService } from './services/validaterules.service';
import { EditCustControlService } from './services/edit-cust-control.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    NgbModule.forRoot(),
    CustmgmtModule,
  ],
  providers: [
    CustdetailsService,
    ValidaterulesService,
    EditCustControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
