import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { CustmgmtRoutingModule } from './custmgmt-routing.module';
import { ViewcustdetailsComponent } from './viewcustdetails/viewcustdetails.component';
import { EditcustomerdetailsComponent } from './editcustomerdetails/editcustomerdetails.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { GenEditFormGroupComponent } from './gen-edit-form-group/gen-edit-form-group.component';
import { PopulateCustInfoFieldsComponent } from './populate-cust-info-fields/populate-cust-info-fields.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    CustmgmtRoutingModule
  ],
  declarations: [ViewcustdetailsComponent, 
    EditcustomerdetailsComponent, 
    GenEditFormGroupComponent, 
    PopulateCustInfoFieldsComponent],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ], 
  exports: [
    ViewcustdetailsComponent, 
    EditcustomerdetailsComponent, 
     
    GenEditFormGroupComponent, 
    PopulateCustInfoFieldsComponent
  ] 
})
export class CustmgmtModule { }
