import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { CustmgmtRoutingModule } from './custmgmt-routing.module';
import { ViewcustdetailsComponent } from './viewcustdetails/viewcustdetails.component';
import { EditcustomerdetailsComponent } from './editcustomerdetails/editcustomerdetails.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DynamiccusteditComponent } from './dynamiccustedit/dynamiccustedit.component';
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
  declarations: [ViewcustdetailsComponent, EditcustomerdetailsComponent, DynamiccusteditComponent, GenEditFormGroupComponent, PopulateCustInfoFieldsComponent]
})
export class CustmgmtModule { }
