import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewcustdetailsComponent } from './viewcustdetails/viewcustdetails.component';
import { EditcustomerdetailsComponent } from './editcustomerdetails/editcustomerdetails.component';

const routes: Routes = [
  { path: '',
    component: ViewcustdetailsComponent,  
  },
  {
        path: 'editcustomerdetails/:id',
        component: EditcustomerdetailsComponent,        
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustmgmtRoutingModule { }
